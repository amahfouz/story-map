import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Epic } from './epic';

@Injectable()
export class EpicHttpService {

  private epicUrl = 'api/epics';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getEpics(): Promise<Epic[]> {
    console.log('getEpics()');
    return this.http.get(this.epicUrl)
               .toPromise()
               .then(this.handleSuccess)
               .catch(this.handleError);
  }

  private handleSuccess(response: any): Epic[] {
    return response.json().data as Epic[];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
