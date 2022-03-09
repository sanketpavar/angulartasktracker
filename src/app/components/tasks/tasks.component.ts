import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {TASKS} from "../../mock-task";
import {Task} from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskservices : TaskService) { }

  ngOnInit(): void {

    this.taskservices.getTasks().subscribe((tasks)=>(this.tasks=tasks));
  }

}
