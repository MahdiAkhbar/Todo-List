import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/app.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {

  constructor(private todoService: TodoService) {}

  allList: ITask[] = this.todoService.todoList;

}
