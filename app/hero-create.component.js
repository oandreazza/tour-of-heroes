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
var hero_service_1 = require('./hero.service');
var HeroCreateComponent = (function () {
    function HeroCreateComponent(heroService) {
        this.heroService = heroService;
    }
    HeroCreateComponent.prototype.create = function (name) {
        this.heroService.save(name);
        this.goBack();
    };
    HeroCreateComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroCreateComponent = __decorate([
        core_1.Component({
            selector: 'hero-create',
            templateUrl: 'app/hero-create.component.html',
            styleUrls: ['app/hero-create.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroCreateComponent);
    return HeroCreateComponent;
}());
exports.HeroCreateComponent = HeroCreateComponent;
//# sourceMappingURL=hero-create.component.js.map