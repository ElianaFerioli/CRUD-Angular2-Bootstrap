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
import { DiscService } from '../shared/model/disc.service';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../shared/model/artist.service';
import 'rxjs/add/operator/do';
var DiscographyComponent = (function () {
    function DiscographyComponent(discService, parametro, artistService) {
        var _this = this;
        this.discService = discService;
        this.artistService = artistService;
        parametro.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.artistName = params['name'];
        });
    }
    DiscographyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.discService.findAllDiscsFromArtist(this.id)
            .subscribe(function (disc) { return _this.allDiscs = _this.filtered = disc; });
    };
    DiscographyComponent.prototype.search = function (search) {
        this.filtered = this.allDiscs.filter(function (disc) { return disc.name.includes(search); });
    };
    return DiscographyComponent;
}());
DiscographyComponent = __decorate([
    Component({
        selector: 'app-discography',
        templateUrl: './discography.component.html',
        styleUrls: ['./discography.component.css']
    }),
    __metadata("design:paramtypes", [DiscService, ActivatedRoute, ArtistService])
], DiscographyComponent);
export { DiscographyComponent };
//# sourceMappingURL=../../../../src/app/discography/discography.component.js.map