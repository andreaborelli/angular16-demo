import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./core/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true, // importa i moduli necessari per il funzionamento del componente
    imports: [
      CommonModule,
      RouterOutlet,
      NavBarComponent
  ],
    template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-nav-bar/>
    <hr>
    <router-outlet></router-outlet>
  `,
    styles: [],

})
export class AppComponent {
  title = 'angular16-demo';
}
