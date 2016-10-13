import { Component,Input,  OnInit  } from '@angular/core';
import { Hero }    from './hero';

@Component({
	moduleId: module.id,
	selector: 'hero-form',
	templateUrl: 'hero-form.component.html'
})

export class HeroFormComponent{
	@Input()
	hero: Hero;

	
	submited = false;

	onSubmit(){
		this.submited = true;
	}

	diagnostic(): void { return JSON.stringify(this.hero); }
}