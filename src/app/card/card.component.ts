import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() title: string;
  @Input() color: string;

  @Output() add: EventEmitter<any> = new EventEmitter();

  @ViewChild('textarea') input: ElementRef;

  onAddPressed($event) {
    this.add.emit('Add Clicked');
  }

  onFocusOut() {
    this.input.nativeElement.scrollTop = 0;
  }

  constructor() { }

}
