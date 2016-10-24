"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('./rxjs-extensions');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = "http://localhost/api/heroes";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .map(this.extracData)
            .catch(this.handleError);
    };
    HeroService.prototype.extracData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    HeroService.prototype.getHero = function (id) {
        var urlFind = this.heroesUrl + "/" + id;
        return this.http.get(urlFind)
            .map(this.extracData)
            .catch(this.handleError);
    };
    HeroService.prototype.save = function (name) {
        var urlSave = this.heroesUrl + "/save";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(urlSave, JSON.stringify({ name: name }), options)
            .map(this.extracData)
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var urlUpdate = this.heroesUrl + "/update";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(urlUpdate, JSON.stringify(hero), options)
            .map(this.extracData)
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var urlDelete = this.heroesUrl + "/" + id;
        return this.http.delete(urlDelete)
            .map(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map