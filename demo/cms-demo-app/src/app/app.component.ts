import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/img/carousel.jpg' },
      { name: 'assets/img/carousel.jpg' },
      { name: 'assets/img/carousel.jpg' }
    ];
  }
}
