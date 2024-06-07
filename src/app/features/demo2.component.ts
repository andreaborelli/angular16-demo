import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Counter Demo with Signal</h2>
    <pre>{{ counter()}}</pre> <!-- stampiamo il valore del signal -->
    <button (click)="inc()">+</button>
    <button (click)="reset()">reset</button>
  `,
  styles: [
  ]
})
export class Demo2Component {
 counter = signal(0); // inizializziamo il signal con il valore 0

 inc() {
  // this.counter.set(this.counter() + 1); // incrementiamo il valore del signal di 1
  this.counter.update(c => c + 1); /* incrementiamo il valore del signal di 1
  update è un metodo che ci permette di modificare il valore del signal */
 }
 reset() {
  this.counter.set(0); // resettiamo il valore del signal a 0
 }

}

 /* i signals ovvero i segnali sono un nuovo sistema impplementato da Angular15+ e molti altri framework
  che ci permettono di tracciare come e dove una proprietà cambia,
  il vero vantaggio nell'utilizzare i signal rispetto ad una classica proprietà utilizzata
  in un componente visualizzata in un template è che possiamo ottimizzare i render */

   /* la change detection è il meccanismo che dietro le quinte in angular
   renderizza tutti i componenti della pagina nel momento in cui
   avviene una una di queste 3 azioni ovvero
   azione dell'utente quindi un evento es: tipo mouseEvent, keyboardEvent;
   un Timer: setTimeout, setInterval, o una chiamata al server come una get di HTTPClient,
   in ognuno di questi 3 casi la change detection trigghera il render su tutti i componenti,
   grazie a questo possiamo es. posizionare una variabile, una proprietà in una classe in un service
   e far si che un componente la scriva, un'altro la legga, e in tempo reale queste 2 proprietà siano in sincronia */

   /* il problema è che spesso vengono renderizzati template di componenti che non necessitano di un render
   es. un componente che clicchiamo su un pulsante o scriviamo qualcosa in un campo di input,
   a questo punto avremmo il triggher della change detection su tutti i components della pagina,
   anche quelli che in realtà necessitano di un render perchè non sono afflitti da nessuna modifica
   dovuta al clic o all'interazione del campo di input, di conseguenza è uno spreco computazionale.
   Grazie ai SIGNALS potremmo fare in modo che questa change detection sia disabilitata
   per es. utilizzando l'opzione OnPush dei componenti oppure eliminando totalmente zone.js
   che è una delle dipendenze che serve alla change detection per funzionare riducendo
   sia il bundle dell'applicazione che avremmo un elemento in meno,
   ma anche risparmiando risorse visto che avremo dei delle operazioni dei calcoli,
   dei controlli, listener in meno nell'applicazione */
