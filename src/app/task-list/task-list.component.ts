import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../model/task.service';

import { Task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() epicId: number;

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe
      (data => this.tasks = data.filter
        (t => t.epic === this.epicId));
  }
}
