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
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
require('./rxjs-extensions');
var DashboardComponent = (function () {
    function DashboardComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.heroes = [];
        this.loaded = false;
        this.hasHeroes = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().subscribe({
            next: function (heroes) { return _this.heroes = heroes; },
            complete: function () {
                _this.loaded = true;
                _this.hasHeroes = _this.heroes.length == 0 ? false : true;
                _this.heroes = _this.heroes.slice(0, 10);
            }
        }, this.loaded = false);
        ;
    };
    DashboardComponent.prototype.selectHero = function (hero) {
        this.selectedHero = hero;
    };
    DashboardComponent.prototype.goToDetail = function () {
        var link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.search = function (name) {
    };
    DashboardComponent.prototype.create = function () {
        var link = ['/create'];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            animations: [
                core_1.trigger('heroState', [
                    core_1.state('true', core_1.style({
                        backgroundColor: 'green',
                        color: 'white',
                        transform: 'scale(1.1)'
                    })),
                    core_1.transition('* => true', core_1.animate('2000ms ease-out')),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map