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
  name: string = 'Enter your name';

  // TODO
  backgroundRow: string = 'background: #333 url(https://coursehunters.net/images/logo.png) no-repeat';

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

  handleFocus(event: any): void {
    if (event.target.value === this.name) {
      event.target.value = '';
    }

    // experemental TODO ask about removeListener -- ??
    // this event is not clone, why? remove itself??
    this.handleBlur(event); // delete
    this.handleClick(event); // delete
  }

  handleInput(event: any): void {
    this.name = event.target.value;
  }

  handleBlur(event: any): void {
    event.target.value = event.target.value || this.name;
  }

  // experemental delete
  handleClick(event: any): void {
    console.log('Click!');
  }
}
