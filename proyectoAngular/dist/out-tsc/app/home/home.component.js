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
import { ArtistService } from '../shared/model/artist.service';
import 'rxjs/add/operator/do';
var HomeComponent = (function () {
    function HomeComponent(artistService) {
        this.artistService = artistService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artistService.findAllArtist()
            .do(console.log)
            .subscribe(function (artist) { return _this.allArtist = _this.filtered = artist; });
    };
    HomeComponent.prototype.search = function (search) {
        this.filtered = this.allArtist.filter(function (artist) { return artist.name.includes(search); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [ArtistService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../src/app/home/home.component.js.map