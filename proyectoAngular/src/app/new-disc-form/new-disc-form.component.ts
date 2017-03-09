import { Component, OnInit, Input } from '@angular/core';
import { DiscService } from '../shared/model/disc.service';
@Component({
  selector: 'new-disc-form',
  templateUrl: './new-disc-form.component.html',
  styleUrls: ['./new-disc-form.component.css']
})
export class NewDiscFormComponent implements OnInit {
  @Input()
  id: string;
  @Input()
  artistName: string;
  constructor(private discService: DiscService) { }

  ngOnInit() {
  }
  saveDisc(n: string, y: string, u: string){
    this.discService.insertNewDisc(n, y, u, this.id);
  }
}
