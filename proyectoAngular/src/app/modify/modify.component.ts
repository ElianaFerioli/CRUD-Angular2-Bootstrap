import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Artist } from '../shared/model/artist';
import { ArtistService } from '../shared/model/artist.service';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  id: string;
  artistName: string;
  name: string;
  company: string;
  url: string;
  constructor(private  parametro: ActivatedRoute, private artistService: ArtistService) {
    parametro.params.subscribe(params => {
      this.id = params['id'];
      this.artistName = params['name'];
    });
  }
  ngOnInit() {
    this.artistService.findArtist(this.id)
    .subscribe(
      response => this.name = response.name
    );
    this.artistService.findArtist(this.id)
    .subscribe(
      response => this.company = response.company
    );
    this.artistService.findArtist(this.id)
    .subscribe(
      response => this.url = response.picture
    );

  }
  modifyArtist(i: string, n: string, c: string, u: string){
    this.artistService.updateArtist(i, n, c, u);
  }
}
