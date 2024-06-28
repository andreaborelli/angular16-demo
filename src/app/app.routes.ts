import { Routes } from '@angular/router';

export const routes: Routes = [ // carico con lazy loading un componente specifico
  { path: 'demo1', loadComponent: () => import('./features/demo1.component')},
  // usa i dinamic import di typescript per caricare il modulo è l'operazione è asincrona
  { path: 'demo2', loadComponent: () => import('./features/demo2.component')},
  { path: 'demo3', loadComponent: () => import('./features/demo3.component')},
  { path: 'demo4', loadComponent: () => import('./features/demo4.component')},

  {
    path: 'demo5', loadComponent: () => import('./features/demo5.component'),
    data : {title: 'Andrea Borelli'} // passo un dato al componente
  },
  { path: 'demo6', loadComponent: () => import('./features/demo6.component')},
  { path: 'demo7', loadComponent: () => import('./features/demo7.component')},
  { path: 'demo8', loadComponent: () => import('./features/demo8.component')},

  { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];

/* { path: 'demo4', loadComponent: () => import('./features/demo4.component').then(c => c.Demo4Component)},
per poter togliere il .then(m => m.Demo1Component) bisogna aggiungere a tutti i componenti il default in

export default class Demo1Component {

}
*/




