import { Component, OnInit } from '@angular/core';
import { Category } from './model/Category';
import { CategoryService } from './model/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';
  categories: Category[] = [];

  constructor(private catService: CategoryService) {}

  ngOnInit(): void {
    console.log('OnInit');
    this.catService.getCategories()
      .then(cats => this.categories = cats);
  }
}
