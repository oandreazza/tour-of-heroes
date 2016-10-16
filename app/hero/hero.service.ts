import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';

@Injectable()
export class HeroService {

	private heroesUrl = "http://localhost/api/heroes";
	private headers = new Headers({'Content-Type': 'application/json'});

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

	save(name: string): Promise<Hero>{
		const urlSave = `${this.heroesUrl}/save`;

		return this.http.post(urlSave, JSON.stringify({name: name}))
			.toPromise()
			.then( res => res.json().data)
			.catch(this.handleError);
	}

	update(hero: Hero): void{
		const urlUpdate = `${this.heroesUrl}/update`;

		return this.http.post(urlUpdate, JSON.stringify(hero))
			.toPromise().catch(this.handleError);

	}

	delete(id: number): Promise<void>{
		const urlDelete = `${this.heroesUrl}/${id}`;
		return this.http.delete(urlDelete)
			.toPromise()
			.then( () => null )
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}


}
