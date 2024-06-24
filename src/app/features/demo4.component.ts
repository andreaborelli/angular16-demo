import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, filter, mergeMap, of } from 'rxjs';
import { Meteo } from '../model/meteo';

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
     <input
      type="text"
      placeholder="Search City"
      (input)="onChangeText($event)"
      [value]="city()"
    >
  <br>
  <br>
      <button (click)="city.set('Trieste')">Trieste</button>
      <button (click)="city.set('Milano')">Milano</button>
      <button (click)="city.set('Palermo')">Palermo</button>
     <h1 *ngIf="meteo$ | async as meteo">Temperature: {{meteo?.main?.temp}}°</h1>

       <!-- (click)="city.set('Roma')" valorizza campo di input con il valore 'Roma' -->

      <!-- <pre>{{city() | json}}</pre> -->
        <!-- <pre>{{city()}}</pre> -->
  `,
  styles: [
  ]
})
export class Demo4Component {

  // converto un signal in un observable per poter sfruttare tutti gli operatori di rxjs che ci fanno comodo

  city = signal('') // signal che rappresenta il campo di input
  http = inject(HttpClient)

  meteo$ = toObservable(this.city) // converto il signal in un observable
      .pipe(
        filter(text => text.length > 3), // filtro i valori che hanno una lunghezza maggiore di 2
        debounceTime(1000),
      mergeMap(
        text => this.http.get<Meteo>(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`)
          .pipe(
            catchError(e => of(null)) // rigenera un observable con of che emette un valore nullo in caso di errore
          )
      ),
      )
    // .subscribe(value =>{ // sottoscrivo l'observable
    // console.log(value)
    // })


  onChangeText(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    this.city.set(input.value)
  }


    // un observable qundo va in errore smette di funzionare e non emette più valori, per questo si usa catchError


}
