import { Component } from '@angular/core';

@Component({
  selector: 'fma-root',
  // template: '<div>{{pageTitle}}</div>',
  templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Album Music App';
}
