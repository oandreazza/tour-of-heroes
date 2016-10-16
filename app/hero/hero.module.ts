import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule }    from '@angular/http';


import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }      from './dashboard.component';
import { HeroCreateComponent }      from './hero-create.component';
import { LoadingHeroesComponent }      from './loading-heroes.component';


@NgModule({
  imports:      [ FormsModule,HttpModule, CommonModule],
  declarations: [ HeroDetailComponent, HeroesComponent, DashboardComponent,HeroCreateComponent,LoadingHeroesComponent ],
  exports: [ HeroDetailComponent, HeroesComponent, DashboardComponent,HeroCreateComponent,LoadingHeroesComponent ],
  providers: 	[HeroService],
})

export class HeroModule { }
