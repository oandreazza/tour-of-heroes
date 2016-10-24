import { Injectable }    from '@angular/core';
import { Headers, Http,Response,RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import './rxjs-extensions'

import { Hero } from './hero';


@Injectable()
export class HeroService {

	private heroesUrl = "http://localhost/api/heroes";
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getHeroes(): Observable<Hero[]> {
		return this.http.get(this.heroesUrl)
               .map(this.extracData)
               .catch(this.handleError);

	}

	private extracData(response: Response){
		let body = response.json();
    return body.data || { };
	}

	getHero(id: number): Observable<Hero> {
		const urlFind = `${this.heroesUrl}/${id}`;

  		return this.http.get(urlFind)
               .map(this.extracData)
               .catch(this.handleError);
	}

	save(name: string): Observable<Hero>{
		const urlSave = `${this.heroesUrl}/save`;
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(urlSave, JSON.stringify({name: name}), options)
			.map(this.extracData)
			.catch(this.handleError);
	}

	update(hero: Hero): Observable<Hero>{
		const urlUpdate = `${this.heroesUrl}/update`;
		let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

		return this.http.post(urlUpdate, JSON.stringify(hero),options)
			.map(this.extracData)
			.catch(this.handleError);

	}

	delete(id: number): Observable<any>{
		const urlDelete = `${this.heroesUrl}/${id}`;

		return this.http.delete(urlDelete)
			.map( () => null)
			.catch(this.handleError);
	}

	private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
