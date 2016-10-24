import { Component, Input, OnInit } from '@angular/core';

import { Hero }    from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-create',
  templateUrl: 'hero-create.component.html',
  styleUrls: ['hero-create.component.css']

})


export class HeroCreateComponent{

	hero = new Hero();
  saving;

	constructor(private heroService: HeroService){}

	create(hero: Hero): void{
		this.heroService.save(hero.name)
		  .subscribe(() => {
        this.goBack();
      }
      this.saving = true;
    );
	}


	goBack(): void{
		window.history.back();
	}

}
