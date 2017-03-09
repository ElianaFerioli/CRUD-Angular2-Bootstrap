import { Component, OnInit } from '@angular/core';
import { DiscService } from '../shared/model/disc.service';
import { Disc } from  '../shared/model/disc';
import { Artist } from  '../shared/model/artist';
import {ActivatedRoute} from '@angular/router';
import { ArtistService } from '../shared/model/artist.service';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css']
})
export class DiscographyComponent implements OnInit {
  allDiscs: Disc[];
  filtered: Disc[];
  id: string;
  artistName: string;
  constructor(private discService: DiscService, parametro: ActivatedRoute, private artistService: ArtistService) {
    parametro.params.subscribe(params => {
      this.id = params['id'];
      this.artistName = params['name'];
    });
  }

  ngOnInit() {
    this.discService.findAllDiscsFromArtist(this.id)
      .subscribe(
        disc => this.allDiscs = this.filtered = disc
      );
  }
  search(search:string){
    this.filtered = this.allDiscs.filter(disc => disc.name.includes(search));
  }

}
