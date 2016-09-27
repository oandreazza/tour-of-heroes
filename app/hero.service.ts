import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

	private heroesUrl = "http://localhost/api/heroes";

	constructor(private http: Http) { }

	getHeroes(): Promise<Hero[]> {	
		return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
	
	}

	getHero(id: number): Promise<Hero> {
		const urlFind = `${this.heroesUrl}/${id}`;

  		return this.http.get(urlFind)
               .toPromise()
               .then(response => response.json().data as Hero)
               .catch(this.handleError);
	}


}
