import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

	private heroesUrl = "http://localhost:8080/api/heroes";

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

	save(name: string): void{
		const urlSave = `${this.heroesUrl}/save`;

		this.http.post(urlSave, JSON.stringify({name: name}))
			.toPromise().catch(this.handleError);
	}

	update(hero: Hero): void{
		const urlSave = `${this.heroesUrl}/update`;

		this.http.post(urlSave, JSON.stringify(hero))
			.toPromise().catch(this.handleError);	

	}

}
