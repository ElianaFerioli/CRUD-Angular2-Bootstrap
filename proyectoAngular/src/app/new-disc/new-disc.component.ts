import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-new-disc',
  templateUrl: './new-disc.component.html',
  styleUrls: ['./new-disc.component.css']
})
export class NewDiscComponent implements OnInit {
  id: string;
  artistName: string;
  constructor(private parametro: ActivatedRoute) {
    parametro.params.subscribe(params => {
      this.id = params['id'];
      this.artistName = params['name'];
    });
  }

  ngOnInit() {
  }

}
