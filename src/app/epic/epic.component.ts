import { Component, OnInit, Input } from '@angular/core';

import { Epic } from '../model/Epic';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent implements OnInit {

  color = '#00DDEE';

  @Input() epic: Epic;

  constructor() { }

  ngOnInit() {
  }

}
