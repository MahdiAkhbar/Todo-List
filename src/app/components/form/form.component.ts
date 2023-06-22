import { Component } from '@angular/core';
import { ITask } from 'src/app/app.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private todoService: TodoService) {}

  addTask(val: string) {
    this.todoService.addTask(val);
  }

}
