var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Artist } from "./artist";
import { AngularFireDatabase } from "angularfire2";
import { AngularFire, } from "angularfire2";
var ArtistService = (function () {
    function ArtistService(db, af) {
        this.db = db;
        this.af = af;
        this.arists$ = af.database.list('artist');
        this.arists$.subscribe(console.log);
    }
    ArtistService.prototype.findAllArtist = function () {
        return this.db.list('artist').map(Artist.fromJsonArray);
    };
    ArtistService.prototype.insertNewArtist = function (n, c, u) {
        return this.db.list('artist').push({ company: c, name: n, picture: u })
            .then(function () { return console.log("List push done"); }, console.error);
    };
    ArtistService.prototype.findArtist = function (key) {
        return this.db.object('artist/' + key);
    };
    ArtistService.prototype.removeArtist = function (key) {
        return this.db.list('artist').remove(key)
            .then(function () { return console.log("List remove done"); }, console.error);
    };
    ArtistService.prototype.updateArtist = function (i, n, c, u) {
        this.arists$.update(i, { name: n, company: c, picture: u })
            .then(function () { return console.log("List update done"); }, console.error);
    };
    return ArtistService;
}());
ArtistService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireDatabase, AngularFire])
], ArtistService);
export { ArtistService };
//# sourceMappingURL=../../../../../src/app/shared/model/artist.service.js.map