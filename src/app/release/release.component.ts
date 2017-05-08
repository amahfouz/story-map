import { Component, OnInit, Input } from '@angular/core';

import { Release } from '../model/Release';
import { Category } from '../model/Category';
import { CategoryService } from '../model/category.service';
import { Epic } from '../model/Epic';
import { EpicService } from '../model/epic.service';


@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {

  @Input() release: Release;
  categories: Category[] = [];
  epics: Epic[] = [];

  constructor(private epicService: EpicService,
              private catService: CategoryService) { }

  ngOnInit() {
    this.catService.getCategories().subscribe
      (data => this.categories = data);
    this.epicService.getEpics().subscribe
      (data => this.epics = data);
  }

  epicsForCat(catId: number) {
    return this.epics.filter(epic => epic.categoryId === catId);
  }
}
