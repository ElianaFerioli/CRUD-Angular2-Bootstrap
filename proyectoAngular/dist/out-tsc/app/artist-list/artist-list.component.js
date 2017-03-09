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
import { ArtistService } from '../shared/model/artist.service';
var ArtistListComponent = (function () {
    function ArtistListComponent(artistService) {
        this.artistService = artistService;
    }
    ArtistListComponent.prototype.ngOnInit = function () {
    };
    ArtistListComponent.prototype.removeArtist = function (key) {
        this.artistService.removeArtist(key);
    };
    return ArtistListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], ArtistListComponent.prototype, "artists", void 0);
ArtistListComponent = __decorate([
    Component({
        selector: 'artist-list',
        templateUrl: './artist-list.component.html',
        styleUrls: ['./artist-list.component.css']
    }),
    __metadata("design:paramtypes", [ArtistService])
], ArtistListComponent);
export { ArtistListComponent };
//# sourceMappingURL=../../../../src/app/artist-list/artist-list.component.js.map