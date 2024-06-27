import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      demo5 works!
    </p>
    <!-- <h1>{{title}}</h1> -->
    {{title$ | async}}
  `,
  styles: [
  ]
})
export class Demo5Component {

/* una novità di angular 16 è la possibilità
per un componente di routes di accettare proprietà in input,
quindi possiamo decorare una proprietà */

// inserendo un secondo parametro ' withComponentInputBinding() ' nel file app.config.ts


/* in angular possiamo utilizzare il decoratore input anche come setter,
vuol dire che questa funzione sarà invocata
ogni qual volta che passiamo una nuova proprietà a un componente,
indipendentemente che questa sia un componente di route,
o un componente normale a cui passiamo degli input */

/* le differenze rispetto ad un input classico
è che possiamo avviare un'azione nel momento
in cui cambia una proprietà in input,
come una chiamata al server,
o semplicemente rendere reattiva questa proprietà es: val */

  title$ = new BehaviorSubject(''); // BehaviorSubject è un observable che emette un valore iniziale

  @Input() set title(val: string) {
    this.title$.next(val); // next emette un nuovo valore
    console.log(val);
  }

}
