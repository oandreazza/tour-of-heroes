import { Component, Input, OnInit } from '@angular/core';


import { HeroService } from './hero.service';

@Component({
  selector: 'hero-create',
  templateUrl: 'app/hero-create.component.html',
  styleUrls: ['app/hero-create.component.css']

})


export class HeroCreateComponent{


	constructor(private heroService: HeroService){}

	create(name: string): void{
		this.heroService.save(name)
		.then(this.goBack);
	}


	goBack(): void{
		window.history.back();
	}
	
}