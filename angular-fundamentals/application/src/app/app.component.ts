import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 5;

  constructor() {
    this.title = 'Ultimate Angular';
  }

  toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  isEven(value: number[]): boolean {
    const result = value.reduce((acc, item) => acc + item);
    return result % 2 === 0 ? true : false;
  }
}
