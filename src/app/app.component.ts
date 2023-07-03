import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private todoservice: TodoService) {}

  deleteCompleted() {
    this.todoservice.deleteCompleted();
  }

  deleteAll() {
    this.todoservice.deleteAll();
  }

  checkAll() {
    this.todoservice.checkAll();
  }

}
