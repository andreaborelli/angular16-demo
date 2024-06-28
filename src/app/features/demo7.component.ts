import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo7',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      demo7 works!
    </p>
  `,
  styles: [
  ]
})
export default class Demo7Component {

  /* quando un componente viene distrutto verrà invocato il metodo del ciclo di vita
  chiamato OnDestroy, nel quale possiamo distruggere observable eliminare timer,
  o fare altre operazioni di pulizia del componente */

   /* in angular 16 è stata aggiunta una nuova funzinalità che possiamo iniettare chiamata DestroyRef
   è possiamo utilizzare per rimanere in ascolto dell'evento OnDestroy ed effettuare delle azioni,
   con il vantaggio che possiamo utilizzare questa funzionalità per sapere quando il componente viene distrutto
   anche non all'interno di una classe, ma es. in una funzione in cui possiamo iniettare DestroyRef
   e poi utilizzarlo per rimanere in ascolto della distruzione del componente */

   destroy = inject(DestroyRef);

   constructor() {
    this.destroy.onDestroy(() => {
      console.log('destroy!');
    });
   }


}
