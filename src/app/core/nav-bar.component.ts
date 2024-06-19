import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <button routerLink="demo1">demo1</button>
    <button routerLink="demo2">demo2</button>
    <button routerLink="demo3">demo3</button>
    <button routerLink="demo4">demo4</button>
  `,
  styles: [
  ]
})
export class NavBarComponent {

}
