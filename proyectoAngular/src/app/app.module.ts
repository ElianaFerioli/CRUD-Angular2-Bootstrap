import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Agregar estas dos lineas para elangularfire
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFireModule} from 'angularfire2/index';
import { AppComponent } from './app.component';
import { ArtistService } from './shared/model/artist.service';
import { DiscService } from './shared/model/disc.service';
import { HomeComponent } from './home/home.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
//Router
import {RouterModule} from '@angular/router';
import {routerConfig} from './router.config';
//Bootstrap
import { AlertModule } from 'ng2-bootstrap';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscographyComponent } from './discography/discography.component';
import { NewArtistComponent } from './new-artist/new-artist.component';
import { NewArtistFormComponent } from './new-artist-form/new-artist-form.component';
import { NewDiscComponent } from './new-disc/new-disc.component';
import { NewDiscFormComponent } from './new-disc-form/new-disc-form.component';
import { ModifyComponent } from './modify/modify.component';
import { ModifyDiscComponent } from './modify-disc/modify-disc.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistListComponent,
    DiscListComponent,
    DiscographyComponent,
    NewArtistComponent,
    NewArtistFormComponent,
    NewDiscComponent,
    NewDiscFormComponent,
    ModifyComponent,
    ModifyDiscComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Bootstrap
    AlertModule.forRoot(),
    //Agregar esta linea para el angularfire
    AngularFireModule.initializeApp(firebaseConfig),
    //Agregar esta línea para el router
    RouterModule.forRoot(routerConfig)
  ],
  providers: [ArtistService, DiscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
