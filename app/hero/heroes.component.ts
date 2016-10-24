import { Component, OnInit,trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import './rxjs-extensions'



@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])
]


})


export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  quickHero: Hero = new Hero();
  deletedHero: Hero;
  loaded = false;
  hasHeroes = false;
  saving = false;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: heroes => this.heroes = heroes,
      complete: () => {
        this.loaded = true;
        this.hasHeroes = this.heroes.length > 0 ? true : false;
        this.heroes = this.heroes.sort(this.orderByName);
      }

    }
    this.loaded = false;
  );
  }

  orderByName(a,b){
    return a.name.localeCompare(b.name);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = this.selectedHero === hero ? null : hero;
  }

  quickAdd(): void{
    this.heroService
      .save(this.quickHero.name)
      .subscribe( () =>  {
        this.getHeroes()
        this.saving = false;
      }
      this.saving = true;
    );

      this.quickHero = new Hero();
  }

  delete(hero: Hero): void{
    this.heroService.delete(hero.id).subscribe(() => {
        this.getHeroes();
        if (this.selectedHero === hero) { this.selectedHero = null; }
        this.deletedHero = hero;
        setTimeout(() => {
          this.deletedHero = null;
        }, 2000)
      });
  }


  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
