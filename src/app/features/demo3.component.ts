import { HttpClient } from '@angular/common/http';
import { Component, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Todo List</h1>

   <!-- <div *ngIf="todos().length === 0">There are no todos</div>  non ottimale perchè viene processata ad ogni change detection -->

    <div *ngIf="noTodos()">there are no todos</div>

    <input type="text" (keydown.enter)="addTodo($event)">

    <li *ngFor="let todo of todos(); let i = index">
      <input type="checkbox" [checked]="todo.completed" (change)="toggleTodo(todo, i)"><!-- checked è un attributo booleano, se il todo è completato allora checked è true -->
      {{ todo.title }}
      <button (click)="deleteTodo(todo)">❌</button><!-- emoticon da tastiera: Windows + punto  -->
    </li>

    <pre>{{todos() | json}}</pre>
  `,
  styles: [
  ]
})
export class Demo3Component {

  http = inject(HttpClient);  // iniettiamo il servizio HttpClient

  todos = signal<Todo[]>([]) // creiamo un signal di tipo Todo[] inizializzato con un array vuoto

  ngOnInit() {
    this.http.get<Todo[]>('http://localhost:3000/todos') // effettuiamo una get all'endpoint
      .subscribe(result => { // ci iscriviamo all'observable
        this.todos.set(result); // con la funzione set settiamo il valore del signal
      })
  }

  noTodos = computed(() => {
    return this.todos().length === 0
  })

  deleteTodo(todo: Todo) { // aggiorniamo il valore di un signal basato su un valore precedente
    this.http.delete(`http://localhost:3000/todos/${todo.id}`) // effettuiamo una delete all'endpoint
      .subscribe(() => {
        this.todos.update((todos => todos.filter(t => t.id !== todo.id))) // ci iscriviamo all'observable e filtriamo i todo in modo da rimuovere quello che vogliamo
      })
  }

  addTodo(event: Event) {
    const target = event.target as HTMLInputElement;// effettuiamo un casting dell'elemento target in un HTMLInputElement
    /*console.log((event.target as HTMLInputElement).value); /* effettuiamo un casting dell'elemento target in un HTMLInputElement,
                                                            perchè value è una proprietà di HTMLInputElement, ma non di event.target*/

    this.http.post<Todo>('http://localhost:3000/todos', { // effettuiamo una post all'endpoint
      title: target.value, // passiamo il valore del target
      completed: false  // settiamo il valore di completed a false
    })
      .subscribe(newTodo => {
        this.todos.update(todos => {
          return [...todos, newTodo] // aggiungiamo il nuovo todo all'array dei todo
        })
        target.value = ''; // resettiamo il valore dell'input
      })

  }

  // STEP 1: use update()
  /*
  toggleTodo(todo: Todo) {
    this.http.patch<Todo>(`http://localhost:3000/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed
    })
      .subscribe(updatedTodo => {
        this.todos.update(todos =>
          todos.map(t => t.id === updatedTodo.id ? updatedTodo : t)
        )
      })
  }
  */

  // FINAL STEP : use mutate()
  toggleTodo(todo: Todo, index: number) {
    console.log(`Toggling todo with ID: ${todo.id}`);

    this.http.patch<Todo>(`http://localhost:3000/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed
    })
      .subscribe(() => { // ci iscriviamo all'observable
        this.todos.mutate(todos => {  // mutate è un metodo che ci permette di modificare il valore del signal
          todos[index].completed = !todos[index].completed; // invertiamo il valore del todo
        })
      })
  }
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

