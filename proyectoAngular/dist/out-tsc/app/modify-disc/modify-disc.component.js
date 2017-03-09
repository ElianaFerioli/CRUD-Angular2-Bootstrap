var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscService } from '../shared/model/disc.service';
import { ArtistService } from '../shared/model/artist.service';
var ModifyDiscComponent = (function () {
    function ModifyDiscComponent(parametro, discService, artistService) {
        var _this = this;
        this.parametro = parametro;
        this.discService = discService;
        this.artistService = artistService;
        parametro.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.discName = params['name'];
        });
    }
    ModifyDiscComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.discService.findDisc(this.id)
            .subscribe(function (response) { return _this.name = response.name; });
        this.discService.findDisc(this.id)
            .subscribe(function (response) { return _this.year = response.year; });
        this.discService.findDisc(this.id)
            .subscribe(function (response) { return _this.url = response.picture; });
        this.discService.findDisc(this.id)
            .subscribe(function (response) { return _this.artistId = response.artistId; });
        this.artistService.findArtist(this.artistId)
            .subscribe(function (response) { return _this.artistName = response.name; });
    };
    ModifyDiscComponent.prototype.modifyDisc = function (i, n, c, u) {
        this.discService.updateDisc(i, n, c, u);
    };
    return ModifyDiscComponent;
}());
ModifyDiscComponent = __decorate([
    Component({
        selector: 'modify-disc',
        templateUrl: './modify-disc.component.html',
        styleUrls: ['./modify-disc.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, DiscService, ArtistService])
], ModifyDiscComponent);
export { ModifyDiscComponent };
//# sourceMappingURL=../../../../src/app/modify-disc/modify-disc.component.js.map