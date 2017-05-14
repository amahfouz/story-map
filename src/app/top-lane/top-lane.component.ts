import { Component, OnInit } from '@angular/core';

import { Category } from '../model/Category';
import { Release } from '../model/Release';
import { CategoryService } from '../model/category.service';

@Component({
  selector: 'app-top-lane',
  templateUrl: './top-lane.component.html',
  styleUrls: ['./top-lane.component.css']
})
export class TopLaneComponent implements OnInit {

  categories: Category[] = [];
  releases: Release[] = [new Release()];

  constructor(private catService: CategoryService) {}

  onAdd(categoryId: number) {
    console.log(categoryId);
  }

  ngOnInit() {
    this.catService.getCategories().subscribe(data => this.categories = data);
  }
}
