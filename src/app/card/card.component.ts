import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() title: string;
  @Input() color: string;

  @Output() add: EventEmitter<any> = new EventEmitter();

  onAddPressed($event) {
    this.add.emit('Add Clicked');
  }
  constructor() { }

}
