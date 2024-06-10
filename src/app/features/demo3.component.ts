import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Todo List</h1>
    <li *ngFor="let todo of todos()">{{todo.title}}</li>
  `,
  styles: [
  ]
})
export class Demo3Component {

  todos = signal<Todo[]>  ([
    { id: 1, title: 'todo 1', completed: true },
    { id: 2, title: 'todo 2', completed: false },
    { id: 3, title: 'todo 3', completed: true }

  ]);

}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
