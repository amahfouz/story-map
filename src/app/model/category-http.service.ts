import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './category';

@Injectable()
export class CategoryHttpService {

  private catUrl = 'api/categories';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getCategories(): Promise<Category[]> {
    console.log('getCategories()');
    return this.http.get(this.catUrl)
               .toPromise()
               .then(this.handleSuccess)
               .catch(this.handleError);
  }

  private handleSuccess(response: any): Category[] {
    console.log('Promise response:' + JSON.stringify(response.json().data));
    return response.json().data as Category[];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
