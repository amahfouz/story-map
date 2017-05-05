import { Component, OnInit } from '@angular/core';

import { CategoryService } from './model/category.service';
import { EpicService } from './model/epic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private catService: CategoryService,
              private epicService: EpicService) {}

  ngOnInit(): void {
    this.catService.init();
    this.epicService.init();
  }
}
