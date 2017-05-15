import { Pipe, PipeTransform } from '@angular/core';

import { Category } from './Category';

@Pipe({
  name: 'sortCategory'
})
export class SortCategoryPipe implements PipeTransform {

  transform(arr: Category[], args?: any): Category[] {
//    let arrs = [];
//    keyValueArr: [] = arrs.map((c) => ["", c]);
//    let map = new Map(keyValueArr);
    return arr;
  }
}
