import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-demo6',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      demo6 works!
    </p>
  `,
  styles: [
  ]
})
export default class Demo6Component { // implements OnDestroy

  /* quando sottoscriviamo un observable in un componente dobbiamo sempre fare unsubscribe */

  // timer$ = interval(1000)
 /* provoca accavallamento dei timer, può consumare molte risorse
 e creare dei bug subdoli diffici da scovare,
 è per risolverli dobbiamo effettuare l'unsubscribe di questo observable,
 quindi creiamo una proprietà di tipo Subscription, e al ngOnDestroy() utilizzando implements OnDestroy
 dovremmo effettuare unsubscribe */

  // constructor() {
  //   this.timer$
  //     .subscribe(console.log)
  // }

// cambiando root il timer sarà stoppato
  //  timer$ = interval(1000);
  //  sub!: Subscription;

  // constructor() {
  //   this.sub = this.timer$ // assegniamo la sottoscrizione a sub
  //     .subscribe(console.log)
  // }

  // ngOnDestroy() {
  //   this.sub.unsubscribe(); // effettuiamo l'unsubscribe

  // }

/* altra strategia è quella di utilizzare il metodo takeUntil,
accetta un observable e quando viene emesso un valore in
questo observable andrà semplicemente a distruggere l'esecuzione di questo observable,
quindi non sarà più necessario effettuare l'unsubscribe,
grazie a questo meccanismo potremmo usare takeUntil
su più observable simultaneamente,
grazie a questo potremmo riutilizzare questo approccio takeUntil
su più observable evitando di dover fare unsuscribe
manuale su diversi observable tutti in una volta */

// ora vedremo il timer che si fermerà quando cambieremo route

  // timer$ = interval(1000);

  //  subject = new Subject();

  // constructor() {
  //   this.timer$
  //     .pipe(
  //       takeUntil(this.subject)
  //     )
  //     .subscribe(console.log)
  // }

  // ngOnDestroy() {
  //   this.subject.next(null);
  //   this.subject.complete();
  // }

  // in Angular 16 è stato introdotto un nuovo metodo che si chiama takeUntilDestroy
  // che si occupa di fare la stessa cosa che abbiamo fatto noi con takeUntil

  timer$ = interval(1000);

  constructor() {
    this.timer$
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe(console.log)
  }

}
