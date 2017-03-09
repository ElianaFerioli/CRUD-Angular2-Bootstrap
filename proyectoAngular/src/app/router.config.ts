import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DiscographyComponent} from './discography/discography.component';
import {NewArtistComponent} from './new-artist/new-artist.component';
import {NewDiscComponent} from './new-disc/new-disc.component';
import {ModifyComponent} from './modify/modify.component';
import {ModifyDiscComponent} from './modify-disc/modify-disc.component';
export const routerConfig : Route[] = [
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'discography',
    component : DiscographyComponent
  },
  {
    path: 'new-artist',
    component : NewArtistComponent
  },
  {
    path: 'new-disc',
    component : NewDiscComponent
  },
  {
    path: 'modify',
    component : ModifyComponent
  },
  {
    path: 'modify-disc',
    component : ModifyDiscComponent
  },
  {
    path: '',
    redirectTo : 'home',
    pathMatch: 'full'
  }
];
