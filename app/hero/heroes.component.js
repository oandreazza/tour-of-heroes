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
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
require('./rxjs-extensions');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.quickHero = new hero_1.Hero();
        this.loaded = false;
        this.hasHeroes = false;
        this.saving = false;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().subscribe({
            next: function (heroes) { return _this.heroes = heroes; },
            complete: function () {
                _this.loaded = true;
                _this.hasHeroes = _this.heroes.length > 0 ? true : false;
                _this.heroes = _this.heroes.sort(_this.orderByName);
            }
        }, this.loaded = false);
        ;
    };
    HeroesComponent.prototype.orderByName = function (a, b) {
        return a.name.localeCompare(b.name);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = this.selectedHero === hero ? null : hero;
    };
    HeroesComponent.prototype.quickAdd = function () {
        var _this = this;
        this.heroService
            .save(this.quickHero.name)
            .subscribe(function () {
            _this.getHeroes();
            _this.saving = false;
        }, this.saving = true);
        ;
        this.quickHero = new hero_1.Hero();
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.id).subscribe(function () {
            _this.getHeroes();
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
            _this.deletedHero = hero;
            setTimeout(function () {
                _this.deletedHero = null;
            }, 2000);
        });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styleUrls: ['heroes.component.css'],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate(100)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(100, core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map