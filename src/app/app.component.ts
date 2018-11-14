import { Component } from '@angular/core';

@Component({
  selector: 'fma-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template:`
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class="nav-link" [routerLink]="['/home']">Home</a></li>
        <li><a class="nav-link" [routerLink]="['/albums']">Albums List</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Album Music App';
}
