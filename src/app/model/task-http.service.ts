import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';

@Injectable()
export class TaskHttpService {

  private tasksUrl = 'api/tasks';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl).toPromise().
      then(response => response.json().data as Task[]).
      catch(error => Promise.reject(error.message || error));
  }
}
