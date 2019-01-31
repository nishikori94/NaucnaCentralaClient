import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rad } from '../home.service';

@Component({
  selector: 'app-rad',
  templateUrl: './rad.component.html',
  styleUrls: ['./rad.component.css']
})
export class RadComponent implements OnInit {


  @Input()
  rad: Rad;

  @Output()
  kupiRadClicked: EventEmitter<Rad> = new EventEmitter(null);

  constructor() { }

  ngOnInit() {
  }

  onKupiRadClick() {
    this.kupiRadClicked.emit(this.rad);
  }


}
