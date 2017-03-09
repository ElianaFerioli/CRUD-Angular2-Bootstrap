import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DiscService } from '../shared/model/disc.service';
import { ArtistService } from '../shared/model/artist.service';

@Component({
  selector: 'modify-disc',
  templateUrl: './modify-disc.component.html',
  styleUrls: ['./modify-disc.component.css']
})
export class ModifyDiscComponent implements OnInit {
  id: string;
  discName: string;
  name: string;
  year: string;
  url: string;
  artistId: string;
  artistName: string;
  constructor(private  parametro: ActivatedRoute, private discService: DiscService, private artistService: ArtistService) {
    parametro.params.subscribe(params => {
      this.id = params['id'];
      this.discName = params['name'];
    });
  }

  ngOnInit() {
    this.discService.findDisc(this.id)
    .subscribe(
      response => this.name = response.name
    );
    this.discService.findDisc(this.id)
    .subscribe(
      response => this.year = response.year
    );
    this.discService.findDisc(this.id)
    .subscribe(
      response => this.url = response.picture
    );
    this.discService.findDisc(this.id)
    .subscribe(
      response => this.artistId = response.artistId
    );
    this.artistService.findArtist(this.artistId)
    .subscribe(
      response => this.artistName = response.name
    );
  }
  modifyDisc(i: string, n: string, c: string, u: string){
    this.discService.updateDisc(i, n, c, u);
  }

}
