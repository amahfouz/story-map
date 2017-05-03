import { Injectable, OnInit } from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { CategoryHttpService } from './category-http.service';
import { Category } from './category';


@Injectable()
export class CategoryService {

  private categories = new BehaviorSubject<Category[]>([]);
  private isFetching: boolean;

  constructor(private catHttpService: CategoryHttpService) {}

  getCategories() {
    return this.categories.asObservable();
  }

  init() {
    this.fetch();
  }

  private fetch() {
    console.log('Fetching');
    if (this.isFetching) {
      return;
    }

    this.isFetching = true;

    this.catHttpService.getCategories().then(
      data => {
        this.isFetching = false;
        console.log('Success: ' + data);
        this.categories.next(data);
      },
      err => {
        this.isFetching = false;
        console.log('Fail: ' + err);
        this.categories.error(err);
      });
  }
}
