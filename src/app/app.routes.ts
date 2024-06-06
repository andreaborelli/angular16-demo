import { Routes } from '@angular/router';

export const routes: Routes = [ // carico con lazy loading un componente specifico
  { path: 'demo1', loadComponent: () => import('./features/demo1.component').then(c => c.Demo1Component) },
  // usa i dinamic import di typescript per caricare il modulo è l'operazione è asincrona
  { path: 'demo2', loadComponent: () => import('./features/demo2.component').then(c => c.Demo2Component) },
  { path: 'demo3', loadComponent: () => import('./features/demo3.component').then(c => c.Demo3Component)},
  { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];

// configurazione delle rotte dell'applicazione
// then: indica attraverso l'utilizzo della promise che il componente che vogliamo caricare è es: Demo1Component
// in features: ma qual'è il componente che vogliamo caricare?
//è il componente che si trova in features/demo1.component.ts è .then(m => m.Demo1Component)
