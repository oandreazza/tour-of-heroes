import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './hero/heroes.component';
import { DashboardComponent }      from './hero/dashboard.component';
import { HeroDetailComponent }      from './hero/hero-detail.component';
import { HeroCreateComponent }      from './hero/hero-create.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },

  {
  	path: 'dashboard',
  	component: DashboardComponent
  },
  {
  	path: '',
  	redirectTo: '/dashboard',
  	pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'create',
    component: HeroCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
