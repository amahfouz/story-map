import { Component, OnInit } from '@angular/core';

import { Category } from '../model/Category';
import { CategoryService } from '../model/category.service';

@Component({
  selector: 'app-top-lane',
  templateUrl: './top-lane.component.html',
  styleUrls: ['./top-lane.component.css']
})
export class TopLaneComponent implements OnInit {

  categories: Category[] = [];

  constructor(private catService: CategoryService) {}

  ngOnInit() {
    this.catService.getCategories().subscribe(data => this.categories = data);
  }
}
