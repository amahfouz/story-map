import { Injectable, OnInit } from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { TaskHttpService } from './task-http.service';
import { Task } from './task';

@Injectable()
export class TaskService {

  private tasks = new BehaviorSubject<Task[]>([]);
  private isFetching: boolean;

  constructor(private taskHttpService: TaskHttpService) { }

  getTasks() {
    return this.tasks.asObservable();
  }

  init() {
    this.fetch();
  }

  private fetch() {
    if (this.isFetching) {
      return;
    }

    this.isFetching = true;

    this.taskHttpService.getTasks().then(
      data => {
        this.isFetching = false;
        this.tasks.next(data);
      },
      err => {
        this.isFetching = false;
        console.log('Fail: ' + err);
        this.tasks.error(err);
      });
  }
}
