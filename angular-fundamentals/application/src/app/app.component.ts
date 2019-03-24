import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Ultimate Angular';
  }

  toUpperCase(str: string): string {
    return str.toUpperCase();
  }
}
