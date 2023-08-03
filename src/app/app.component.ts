import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  constructor(private todoservice: TodoService) {}

  ngDoCheck(): void {
    this.deleteAllStatus = this.todoservice.todoList.length > 0 ? true : false;
    this.todoservice.isAllchecked();
    this.isAllChecked = this.todoservice.isAllChecked;
    this.changeCheckAllText();
  }

  isAllChecked: boolean = false;
  checkAllText: string = 'Check All';
  todoList = this.todoservice.todoList;
  deleteAllStatus: boolean = true;

  deleteCompleted() {
    this.todoservice.deleteCompleted();
  }

  deleteAll() {
    this.todoservice.deleteAll();
  }

  checkAll() {
    this.todoservice.checkAll();
  }

  changeCheckAllText() {
    if (this.todoservice.isAllChecked) {
      this.checkAllText = 'Uncheck All';
    } else {
      this.checkAllText = 'Check All';
    }
  }

}
