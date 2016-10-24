import { Component, OnInit,trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import './rxjs-extensions'


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  animations: [
    trigger('heroState',[
        state('true', style({
          backgroundColor: 'green',
          color: 'white',
          transform: 'scale(1.1)'
        })),
         transition('* => true', animate('2000ms ease-out')),
    ])
  ]

})

export class DashboardComponent implements OnInit {
	heroes: Hero[] = []
  selectedHero: Hero;
  loaded = false;
  hasHeroes = false;

	constructor(private heroService: HeroService, private router: Router) { }

	ngOnInit(): void {
    	this.heroService.getHeroes().subscribe( {
        next: heroes => this.heroes = heroes,
        complete: () => {
          this.loaded = true;
          this.hasHeroes = this.heroes.length == 0 ? false : true;
          this.heroes = this.heroes.slice(0,10);
        }
      }
      this.loaded = false;
    );
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
	}

  goToDetail(){
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }

  search(name: string){

  }

  create(): void{
    let link = ['/create'];
    this.router.navigate(link);
  }

}
