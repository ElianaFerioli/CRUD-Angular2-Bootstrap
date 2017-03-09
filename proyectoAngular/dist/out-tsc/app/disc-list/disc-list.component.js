var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { DiscService } from '../shared/model/disc.service';
var DiscListComponent = (function () {
    function DiscListComponent(discService) {
        this.discService = discService;
    }
    DiscListComponent.prototype.ngOnInit = function () {
    };
    DiscListComponent.prototype.removeDisc = function (key) {
        this.discService.removeDisc(key);
    };
    return DiscListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], DiscListComponent.prototype, "disc", void 0);
DiscListComponent = __decorate([
    Component({
        selector: 'disc-list',
        templateUrl: './disc-list.component.html',
        styleUrls: ['./disc-list.component.css']
    }),
    __metadata("design:paramtypes", [DiscService])
], DiscListComponent);
export { DiscListComponent };
//# sourceMappingURL=../../../../src/app/disc-list/disc-list.component.js.map