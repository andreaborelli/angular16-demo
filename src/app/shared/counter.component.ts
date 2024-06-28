import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `

    Counter: {{ value }} K
  `,
  styles: [
  ]
})
export class CounterComponent {

   @Input({
    transform: (value: number) => {
      return value * 1000;
    }
  })
  value: number | undefined;

  /* ci sono situazioni in cui vogliamo passare
  una proprietà in Input ad un componente,
  ma vogliamo anche modificarla/trasformarla,
  effettuando una trasformazione
  direttamente nella proprietà in @Input
  tramite il decoratore, in particolar modo la proprietà transform
  che ci permette di ricevere il value: number,
  e di moltiplicarlo per 1000, e non serve nemmeno *NgIf,
  perchè anche se in trasform avessimo un undefined sarebbe restituito comunque un valore,
  è consigliato, in questo caso utilizzare insieme a trasform
  la proprietà required per assicurarci che il valore sia passato */



}
