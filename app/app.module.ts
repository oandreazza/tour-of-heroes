import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeroModule }      from './hero/hero.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HeroModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
