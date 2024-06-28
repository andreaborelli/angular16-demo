import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "../shared/counter.component";

@Component({
    selector: 'app-demo8',
    standalone: true,
    template: `

    <h1>Counter Demo</h1>

    <app-counter [value]="10" [showUnit]="true"/> <!--  booleano usiamo le parentesi quadre per passare il valore al componente, altrimenti pareremmo una stringa -->
    <app-counter [value]="10"showUnit/>


    <!-- Novità di angular 16 è anche di poter usare il self closing tag
    ovvero possiamo chiudere direttamente il componente con slash e parentesi angolari <app-counter/>
    -->
  `,
    styles: [],
    imports: [CommonModule, CounterComponent]
})
export default class Demo8Component {

/* in angular 16 sono aggiunte diverse funzionalità al decoratore @Input
una tra tutte è alias */

/* per passare un valore di tipo number ad una proprietà,
bisogna usare le parentesi quadre  <app-counter [value]="1"/>,
per poter passare un valore number si con che senza le quadre,
bisogna che nel utiliziamo nel decoratore @Input
l'opzione transform: numberAttribute */


}
