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
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.saveRequest = new core_1.EventEmitter();
    }
    HeroFormComponent.prototype.save = function () {
        this.saveRequest.emit(this.hero);
    };
    return HeroFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroFormComponent.prototype, "hero", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeroFormComponent.prototype, "saveRequest", void 0);
HeroFormComponent = __decorate([
    core_1.Component({
        selector: 'hero-form',
        moduleId: module.id,
        templateUrl: 'hero-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], HeroFormComponent);
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map