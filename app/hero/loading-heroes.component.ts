import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'loading-heroes',
  templateUrl: 'loading-heroes.component.html',

})

export class LoadingHeroesComponent {
  @Input()
  loaded = false;
  @Input()
  hasHeroes = false;
}
