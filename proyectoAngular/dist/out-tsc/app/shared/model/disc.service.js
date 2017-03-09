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
import { Disc } from "./disc";
import { AngularFire, } from "angularfire2";
import 'rxjs/add/operator/do';
import { AngularFireDatabase } from "angularfire2";
var DiscService = (function () {
    function DiscService(db, af) {
        this.db = db;
        this.af = af;
        this.discs$ = af.database.list('discography');
        this.discs$.subscribe(console.log);
    }
    DiscService.prototype.findAllDiscs = function () {
        return this.db.list('discography').map(Disc.fromJsonArray);
    };
    DiscService.prototype.findAllDiscsFromArtist = function (id) {
        var discs$ = this.db.list('discography', { query: { orderByChild: 'artistId', equalTo: id } });
        discs$.subscribe();
        return discs$;
    };
    DiscService.prototype.findDisc = function (key) {
        return this.db.object('discography/' + key);
    };
    DiscService.prototype.insertNewDisc = function (n, y, u, a) {
        return this.db.list('discography').push({ name: n, year: y, picture: u, artistId: a })
            .then(function () { return console.log("List push done"); }, console.error);
    };
    DiscService.prototype.removeDisc = function (key) {
        return this.db.list('discography').remove(key)
            .then(function () { return console.log("List remove done"); }, console.error);
    };
    DiscService.prototype.updateDisc = function (i, n, a, u) {
        this.discs$.update(i, { name: n, year: a, picture: u })
            .then(function () { return console.log("List update done"); }, console.error);
    };
    return DiscService;
}());
DiscService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireDatabase, AngularFire])
], DiscService);
export { DiscService };
//# sourceMappingURL=../../../../../src/app/shared/model/disc.service.js.map