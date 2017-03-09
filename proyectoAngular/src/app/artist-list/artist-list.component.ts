import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../shared/model/artist';
import { ArtistService } from '../shared/model/artist.service';
@Component({
  selector: 'artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  @Input()
  artists: Artist[];
  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }
  removeArtist(key){
    this.artistService.removeArtist(key);
  }
}
