import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Todo List</h1>

   <!-- <div *ngIf="todos().length === 0">There are no todos</div>  non ottimale perchè viene processata ad ogni change detection -->
   <div *ngIf="noTodos()">There are no todos</div>

   <input type="text" (keydown.enter)="addTodo($event)">

    <li *ngFor="let todo of todos(); let i = index">
      <input type="checkbox" [checked]="todo.completed" (change)="toggleTodo(i)"> <!-- checked è un attributo booleano, se il todo è completato allora checked è true -->
      {{todo.title}}
      <button (click)="deleteTodo(todo)">❌</button> <!-- emoticon da tastiera: Windows + punto  -->
    </li>

    <pre>{{todos() | json}}</pre>
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

  deleteTodo(todo: Todo) { // aggiorniamo il valore di un signal basato su un valore precedente
    this.todos.update((todos =>{ /* update è un metodo che ci permette di modificare il valore del signal,
      ci permette di ricevere una funzione, ricevere i todo attuali e restituire i nuovi todo */
      return todos.filter(t => t.id !== todo.id) // una lista filtrata dove rimuoviamo dai todo quelloche effettivamente vogliamo eliminare
    }))
  }

  noTodos = computed(() => { // signal derivato, sorta di stato derivato dal signal principale
    return this.todos().length === 0; // verificare se la lunghezza dei todo è uguale a 0
  })

  addTodo(event: Event){
    /*console.log((event.target as HTMLInputElement).value); /* effettuiamo un casting dell'elemento target in un HTMLInputElement,
                                                            perchè value è una proprietà di HTMLInputElement, ma non di event.target*/
     const target = event.target as HTMLInputElement; // effettuiamo un casting dell'elemento target in un HTMLInputElement
     const newTodo: Todo = { // creiamo un nuovo todo
      id: Date.now(), // generiamo un id univoco data il quale è un timestamp
      title: target.value, // il titolo del todo è il valore dell'input
      completed: false // il todo è inizialmente non completato
     }
     this.todos.update(todos =>
      [...todos, newTodo]); // aggiungiamo il nuovo todo alla lista dei todo
      target.value = ''; // resettiamo il valore dell'input
  }
  toggleTodo(index: number) {
    this.todos.mutate(todos => { // mutate è un metodo che ci permette di modificare il valore del signal
      todos[index].completed = !todos[index].completed; // invertiamo il valore del todo
    });
    // this.todos.update(todos => { // recuperiamo l'elenco dei todo attuali
    //   return todos.map(todo => { // itera su tutti i todo
    //       return todo.id === todo.id ? {...todo, completed: !todo.completed} : todo; // itera su tutti i todo
    //   })
    // })
  }

}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
