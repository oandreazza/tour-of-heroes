import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import './rxjs-extensions'

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']

})


export class HeroDetailComponent implements OnInit{
	@Input()
	hero: Hero;
  saving;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.hero = new Hero();
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    });
  }

  update(hero: Hero): void {
    this.heroService.update(hero)
    .subscribe(() => {
      this.goBack()
    }
    this.saving = true;
  );
  }

  goBack(): void {
    window.history.back();
  }

}
