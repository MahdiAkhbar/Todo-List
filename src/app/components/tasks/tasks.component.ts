import { Component, Input } from '@angular/core';
import { ITask } from '../../app.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private todoService: TodoService) {}

  completed: boolean = false;
  @Input() taskInput!: ITask;

  deleteTask(input: ITask) {
    this.todoService.deleteTask(input)
  }

  onChange(taskInput: ITask) {
    this.completed = !this.completed;    
    this.todoService.onChange(taskInput);
    console.log(taskInput);
    
  }

  changeClass(input: ITask) {
    let index: number = this.todoService.todoList.indexOf(input);
    if(this.todoService.todoList[index].isComplete) {
      return {'list-group-item-success':this.todoService.todoList[index].isComplete, 'border-primary': this.todoService.todoList[index].isComplete}
    }
    return ''
  }
}
