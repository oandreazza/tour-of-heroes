import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],

})


export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  quickHero: Hero = new Hero();
  deletedHero: Hero;
  loaded = false;
  hasHeroes = false;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes
      this.loaded = true;
      this.hasHeroes = this.heroes.length > 0 ? true : false;
    });
    this.loaded = false;
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
      .then( this.getHeroes() );

      this.quickHero = new Hero();
  }

  delete(hero: Hero): void{
    this.heroService.delete(hero.id).then(() => {
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
