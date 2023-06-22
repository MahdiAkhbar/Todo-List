import { Component } from '@angular/core';
import { ITask } from 'src/app/app.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {

  constructor(private todoService: TodoService) {}

  allList: ITask[] = this.todoService.todoList;

}
