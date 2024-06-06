import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CommonModule], // contiene le direttive di base di Angular e pipe
  template: `
    <p>
      demo1 works!
    </p>
  `,
  styles: [
  ]
})
export class Demo1Component {

  constructor(private http: HttpClient) { // istanziato classe HttpClient
    http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(res => {
      console.log(res);
   })
  }
}
