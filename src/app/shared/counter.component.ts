import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `

    Counter: {{ value }}
    <span *ngIf="showUnit">K</span>
  `,
  styles: [
  ]
})
export class CounterComponent {

  @Input()
  value: number | undefined;

  @Input({transform: booleanAttribute}) // booleanAttribute è un alias di boolean in react esiste da tempo
  showUnit: boolean = false;


  // @Input({transform: numberAttribute})
  // value: number | undefined;


  /* per passare un valore di tipo number ad una proprietà,
bisogna usare le parentesi quadre  <app-counter [value]="1"/>,
per poter passare un valore number si con che senza le quadre,
bisogna che nel utiliziamo nel decoratore @Input
l'opzione transform: numberAttribute */

  //  @Input({
  //   transform: (value: number) => {
  //     return value * 1000;
  //   }
  // })
  // value: number | undefined;

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
