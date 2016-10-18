import { Component } from '@angular/core';


@Component({
	selector : 'my-app',
	template: `

		 <nav class="navbar navbar-default navbar-fixed-top">
  		<div class="container">
				<div class="navbar-header">
					{{title}}
				</div>
			</div>
		</nav>
		<ul class="nav nav-tabs">
		 <li role="presentation" routerLinkActive="active"><a routerLink="dashboard" >Dashboard</a></li>
		 <li role="presentation" routerLinkActive="active"><a routerLink="heroes" >Heroes</a></li>
	 	</ul>
		<router-outlet></router-outlet>

		 	`,

	styleUrls: ['app/app.component.css']
})

export class AppComponent{
	title = 'Tour of Heroes';
}
