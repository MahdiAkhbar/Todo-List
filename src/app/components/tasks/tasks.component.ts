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

  triangleFill: boolean = true;
  triangleClass: string = 'bi bi-caret-right-fill';

  @Input() taskInput!: ITask;

  deleteTask(input: ITask) {
    this.todoService.deleteTask(input)
  }

  onChange(taskInput: ITask) {
    this.todoService.onChange(taskInput);    
  }

  changeClass(input: ITask) {
    let index: number = this.todoService.todoList.indexOf(input);
    if (this.todoService.todoList[index].isComplete) {
      return {'list-group-item-success':this.todoService.todoList[index].isComplete, 'border-primary': this.todoService.todoList[index].isComplete}
    }
    return ''
  }

  onClick() {
    this.triangleFill = !this.triangleFill;
    
  }
  onCollapse() {
    return {'bi bi-caret-right-fill': this.triangleFill ,'bi bi-caret-down': !this.triangleFill};

  }
}
