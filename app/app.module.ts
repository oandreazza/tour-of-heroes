import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }      from './dashboard.component';
import { HeroCreateComponent }      from './hero-create.component';
import { HeroFormComponent }      from './hero-form.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule, routing ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent,HeroCreateComponent, HeroFormComponent ],
  providers: 	[HeroService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }