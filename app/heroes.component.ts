import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],

})


export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  quickHero = new Hero();

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  quickAdd(hero: Hero): void{
    this.heroService
      .save(hero.name)
      .then( hero => this.heroes.push(hero));

      this.quickHero = new Hero();
  }

  delete(hero: Hero): void{
    this.heroService.delete(hero.id).then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }


  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
