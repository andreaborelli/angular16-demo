import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      demo5 works!
    </p>
    <h1>{{title}}</h1>
  `,
  styles: [
  ]
})
export default class Demo5Component {

  @Input() title: string = '';


}
