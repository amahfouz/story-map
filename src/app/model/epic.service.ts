import { Injectable, OnInit } from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { EpicHttpService } from './epic-http.service';
import { Epic } from './epic';

@Injectable()
export class EpicService {

  private epics = new BehaviorSubject<Epic[]>([]);
  private isFetching: boolean;

  constructor(private epicHttpService: EpicHttpService) { }

    getCategories() {
    return this.epics.asObservable();
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

    this.epicHttpService.getEpics().then(
      data => {
        this.isFetching = false;
        console.log('Success: ' + data);
        this.epics.next(data);
      },
      err => {
        this.isFetching = false;
        console.log('Fail: ' + err);
        this.epics.error(err);
      });
  }

}
