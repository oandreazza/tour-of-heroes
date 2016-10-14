import { Component } from '@angular/core';


@Component({
	selector : 'my-app',
	template: `
		 <h1>{{title}}</h1>
		 	<ul class="nav nav-tabs">
			  <li role="presentation" routerLinkActive="active"><a routerLink="/dashboard" >Dashboard</a></li>
			  <li role="presentation" routerLinkActive="active"><a routerLink="/heroes" >Heroes</a></li>
			</ul>
   		 <router-outlet></router-outlet>
	`,

	styleUrls: ['app/app.component.css']
})

export class AppComponent{
	title = 'Tour of heroes';
}
