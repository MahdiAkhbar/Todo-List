import { Component, Input } from '@angular/core';
import { ITask } from '../../app.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  constructor(private todoService: TodoService) {}

  allList: ITask[] = this.todoService.todoList

}
