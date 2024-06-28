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
    <button routerLink="demo5">demo5</button>
    <button routerLink="demo6">demo6</button>
    <button routerLink="demo7">demo7</button>
    <button routerLink="demo8">demo8</button>
  `,
  styles: [
  ]
})
export class NavBarComponent {

}
