import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../shared/model/artist.service';
import { Artist } from  '../shared/model/artist';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allArtist: Artist[];
    filtered: Artist[];
    constructor(private artistService: ArtistService) { }

    ngOnInit() {
        this.artistService.findAllArtist()
          .do(console.log)
          .subscribe(
            artist => this.allArtist = this.filtered = artist
          );

      }
      search(search:string){
        this.filtered = this.allArtist.filter(artist => artist.name.includes(search));
      }
}
