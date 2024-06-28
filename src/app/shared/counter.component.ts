import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `

    <h1>Counter: {{ counter }}</h1>
  `,
  styles: [
  ]
})
export class CounterComponent {

  /* per far si che all'interno di un componente
  possiamo usare la parola es. counter,
  è dall'esterno sia passata come es. value,
  per fare questo possiamo avere
  una proprietà counter nel component,
  che può essere utilizzata nel template,
  ma definire l'alias chiamato value
  che sarà possibile utilizzare
  per passare la proprietà in ingresso al component.  */


  @Input({alias: 'value'})
    counter: number | undefined;

}
