import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../shared/model/artist.service';
@Component({
  selector: 'new-artist-form',
  templateUrl: './new-artist-form.component.html',
  styleUrls: ['./new-artist-form.component.css']
})
export class NewArtistFormComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }
  saveArtist(n: string, c: string, u: string){
    this.artistService.insertNewArtist(n, c, u);
  }
}
