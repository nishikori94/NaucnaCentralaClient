import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Casopis, PaymentMethod } from '../home.service';

@Component({
  selector: 'app-casopis',
  templateUrl: './casopis.component.html'
})
export class CasopisComponent implements OnInit {

  @Input()
  casopis: Casopis;

  @Output()
  kupiClicked: EventEmitter<number> = new EventEmitter(null);

  @Output()
  prikaziRadoveClicked: EventEmitter<number> = new EventEmitter(null);
  
  constructor() { }

  ngOnInit() {
  }

  onKupiClick() {
    this.kupiClicked.emit(this.casopis.id);
  }

  prikaziRadove(){
    this.prikaziRadoveClicked.emit(this.casopis.id);
  }


}
