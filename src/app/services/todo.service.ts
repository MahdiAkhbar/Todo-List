import { Injectable } from '@angular/core';
import { ITask } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  id: number = 1;
  date: string = ((new Date()).toString()).slice(0, 24);
  todoList: ITask[] = [
    {
      id: 1,
      body: 'This is test',
      isComplete: false,
      date: this.date
    },
    {
      id: 2,
      body: 'This is test 2',
      isComplete: true,
      date: this.date
    },
    {
      id: 3,
      body: 'This is test 3',
      isComplete: false,
      date: this.date
    },
    {
      id: 4,
      body: 'This is test 4',
      isComplete: false,
      date: this.date
    },
    {
      id: 5,
      body: 'This is test 5',
      isComplete: true,
      date: this.date
    },
    {
      id: 6,
      body: 'This is test 6',
      isComplete: false,
      date: this.date
    },
  ];

  addTask(val: string) {
    let date2 = ((new Date()).toString()).slice(0, 24);
    this.todoList.push({
      id: this.id++,
      body: val,
      isComplete: false,
      date: date2
    });
  }
  deleteTask(input: ITask) {
    let index = this.todoList.indexOf(input);
    this.todoList.splice(index, 1);
  }
  onChange(input: ITask) {
    // this.completed = !this.completed;
    let index: number = this.todoList.indexOf(input);
    this.todoList[index].isComplete = !this.todoList[index].isComplete;
  }

}
