import { Component, Input, OnInit } from '@angular/core';

import { Hero }    from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-create',
  templateUrl: 'app/hero-form.component.html',
  styleUrls: ['app/hero-create.component.css']

})


export class HeroCreateComponent{

	hero = new Hero();

	constructor(private heroService: HeroService){}

	create(hero: Hero): void{
		this.heroService.save(hero.name)
		.then(this.goBack);
	}


	goBack(): void{
		window.history.back();
	}
	
}