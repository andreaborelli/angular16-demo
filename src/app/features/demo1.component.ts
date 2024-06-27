import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CommonModule], // contiene le direttive di base di Angular e pipe
  template: `
    <p>
      demo1 works!
    </p>
    <ul>
      <li *ngFor="let user of users$ | async">{{user.name}}</li>
    </ul>
    <pre>{{ users$ | async | json }}</pre>
    <!-- pipe async ci permette di effettuare una sottoscrizione di uno observable direttamente nel template,
    poi riapplichiamo un pipe json per vedere il risultato ovvero il pipe json sarà applicato al valore emesso dal observable
    e non più all'observable stesso -->
  `,
  styles: [
  ]
})
export default class Demo1Component {

  // constructor(private http: HttpClient) { // istanziato classe HttpClient,
  //   http.get('https://jsonplaceholder.typicode.com/users')
  //   .subscribe(res => {
  //     console.log(res);
  //  })
  // }

  http = inject(HttpClient);

  /* la funzione inject ci permette di evitare di effettuare injection nel costruttore
   e di poter iniettare servizi anche in una funzione
   oppure associando l'injection ad una proprietà di una classe */

   users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

   // $ convenzione per rappresentare una variabile, una costante, una proprietà di una classe che contiene un Observable


    // tre volte source a video significa che abbiamo fatto il print di un observable
    // {
    //   "source": {
    //     "source": {
    //       "source": {}
    //     }
    //   }
    // }


}
interface User {
  id: number;
  name: string;
}

