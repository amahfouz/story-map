import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../model/Category';
import { CategoryService } from '../model/category.service';
import { Epic } from '../model/Epic';
import { EpicService } from '../model/epic.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  color = '#FFa833';

  @Input() category: Category;
  epics: Epic[];

  constructor(private epicService: EpicService,
              private catService: CategoryService) { }

  onAdd(event) {
    this.catService.addAfter(this.category);
  }

  ngOnInit() {
    this.epicService.getEpics().subscribe
      (data => this.epics = data.filter
        (epic => epic.categoryId === this.category.id));
  }
}
