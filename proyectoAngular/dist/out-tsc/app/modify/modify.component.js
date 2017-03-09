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
import { ArtistService } from '../shared/model/artist.service';
import 'rxjs/add/operator/do';
var ModifyComponent = (function () {
    function ModifyComponent(parametro, artistService) {
        var _this = this;
        this.parametro = parametro;
        this.artistService = artistService;
        parametro.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.artistName = params['name'];
        });
    }
    ModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artistService.findArtist(this.id)
            .subscribe(function (response) { return _this.name = response.name; });
        this.artistService.findArtist(this.id)
            .subscribe(function (response) { return _this.company = response.company; });
        this.artistService.findArtist(this.id)
            .subscribe(function (response) { return _this.url = response.picture; });
    };
    ModifyComponent.prototype.modifyArtist = function (i, n, c, u) {
        this.artistService.updateArtist(i, n, c, u);
    };
    return ModifyComponent;
}());
ModifyComponent = __decorate([
    Component({
        selector: 'app-modify',
        templateUrl: './modify.component.html',
        styleUrls: ['./modify.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, ArtistService])
], ModifyComponent);
export { ModifyComponent };
//# sourceMappingURL=../../../../src/app/modify/modify.component.js.map