import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-heroes',
  templateUrl: './app/hero/loading-heroes.component.html',

})

export class LoadingHeroesComponent {
  @Input()
  loaded = false;
  @Input()
  hasHeroes = false;
}
