import { Component, OnInit, Input } from '@angular/core';
import { Disc } from '../shared/model/disc';
import { DiscService } from '../shared/model/disc.service';
@Component({
  selector: 'disc-list',
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.css']
})
export class DiscListComponent implements OnInit {
  @Input()
  disc: Disc[];
  constructor(private discService: DiscService) {

  }

  ngOnInit() {
  }
  removeDisc(key){
    this.discService.removeDisc(key);
  }
}
