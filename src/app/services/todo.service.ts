import { Injectable } from '@angular/core';
import { ITask } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  checkAllFlag: boolean = false;
  isAllChecked: boolean = false;
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
      isComplete: false,
      date: this.date
    },
    {
      id: 4,
      body: 'This is test 3',
      isComplete: true,
      date: this.date
    },
    {
      id: 5,
      body: 'This is test 4',
      isComplete: true,
      date: this.date
    },
    {
      id: 6,
      body: 'This is test 5',
      isComplete: true,
      date: this.date
    },
    {
      id: 7,
      body: 'This is test 6',
      isComplete: false,
      date: this.date
    },
    {
      id: 5,
      body: 'This is test 7',
      isComplete: false,
      date: this.date
    },
    {
      id: 6,
      body: 'This is test 8',
      isComplete: false,
      date: this.date
    },
    {
      id: 7,
      body: 'This is test 9',
      isComplete: false,
      date: this.date
    }
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
    let index: number = this.todoList.indexOf(input);
    this.todoList[index].isComplete = !this.todoList[index].isComplete;
  }
  deleteCompleted() {
    const todo = this.todoList;
    let removalIndex: number[] = [];
    todo.forEach((item, index) => {
      if (item.isComplete)
        removalIndex.push(index);
    });
    for (let i = removalIndex.length - 1; i >= 0; i--)
      todo.splice(removalIndex[i], 1);
  }

  deleteAll() {
    this.todoList.splice(0, this.todoList.length);
  }

  checkAll() {
    const todo = this.todoList;
    this.checkAllFlag = false;
    for (let i = 0; i < todo.length; i++)
      if (!todo[i].isComplete){
        this.checkAllFlag = true;        
        break;
      }
    if (this.checkAllFlag)
      todo.forEach((item) => {
        if (!item.isComplete)
          item.isComplete = !item.isComplete;
      })
    else
      todo.forEach((item) => {
        item.isComplete = false;
      })
  }

  isAllchecked() {
    const todo = this.todoList;
    for (let i = 0; i < todo.length; i++)
      if (!todo[i].isComplete){
        this.isAllChecked = false;
        break;
      }
      else
        this.isAllChecked = true;
      return this.isAllChecked;
  }
}
