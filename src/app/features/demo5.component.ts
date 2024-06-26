import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      demo5 works!
    </p>
    <h1>{{title}}</h1>
  `,
  styles: [
  ]
})
export class Demo5Component {

/* una novità di angular 16 è la possibilità
per un componente di routes di accettare proprietà in input,
quindi possiamo decorare una proprietà */

// inserendo un secondo parametro ' withComponentInputBinding() ' nel file app.config.ts

  @Input() title: string = '';

}
