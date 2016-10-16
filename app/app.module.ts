import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { routing } from './app.routing';

import { HeroModule }      from './hero/hero.module';

@NgModule({
  imports:      [ BrowserModule, routing, HeroModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
