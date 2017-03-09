var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AppComponent } from './app.component';
import { ArtistService } from './shared/model/artist.service';
import { DiscService } from './shared/model/disc.service';
import { HomeComponent } from './home/home.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
import { AlertModule } from 'ng2-bootstrap';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            ArtistListComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            AlertModule.forRoot(),
            AngularFireModule.initializeApp(firebaseConfig),
            RouterModule.forRoot(routerConfig)
        ],
        providers: [ArtistService, DiscService],
        bootstrap: [AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map