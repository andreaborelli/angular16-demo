import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop'
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, mergeMap } from 'rxjs';
import { Meteo } from '../model/meteo';

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
     <input type="text" placeholder="Search City" [formControl]="input">
     <h1 *ngIf="meteo()">Temperature: {{meteo()?.main?.temp}}°</h1>
  <br>
  <br>
      <button (click)="input.setValue('Trieste')">Trieste</button>
      <button (click)="input.setValue('Milano')">Milano</button>
      <button (click)="input.setValue('Palermo')">Palermo</button>
      
       <!-- (click)="input.setValue('Roma')" valorizza campo di input con il valore 'Roma' -->

      <!-- <pre>{{meteo() | json}}</pre> -->
      <!-- <pre>{{meteo | json}}</pre> -->
  `,
  styles: [
  ]
})
export class Demo4Component {

  input = new FormControl('')
  http = inject(HttpClient)

  // signal che dipende da un observable utlizzando la funzionalità toSignal di angular 16
  meteo = toSignal( // questa funzione converte un observable in un signal
    this.input.valueChanges
       .pipe(
         debounceTime(700), /* filtra emissione se un valore è un tempo inferiore a quello impostato 700ms per emettere un valore,
         imposta un ritardo di 700 millisecondi. Ciò significa che l'Observable emetterà un valore solo se non ci sono altre emissioni nei successivi 700 millisecondi.*/
         mergeMap(text => this.http.get<Meteo>(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`))
       )
  )


           // .subscribe(console.log);
           /* sequenza di observable che diventa un unico observable non emette il valore del campo di input
           ma il valore generato dalla chiamata http get*/

}
