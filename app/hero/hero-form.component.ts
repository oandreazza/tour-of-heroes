import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  moduleId : module.id,
  templateUrl: 'hero-form.component.html',
})

export class HeroFormComponent{
  @Input()
  hero : Hero;

  @Input()
  saving = false;

  @Output()
  saveRequest = new EventEmitter<Hero>();

  save(): void{
    this.saveRequest.emit(this.hero)
  }

  back(): void{
    window.history.back();
  }

}
