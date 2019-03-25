import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  numberOne = 1;
  numberTwo = 5;
  name = 'Enter your name';
  backgroundRow: object;


  constructor(private sanitizer: DomSanitizer) {
    this.title = 'Ultimate Angular';
    this.backgroundRow = this.sanitizer
      .bypassSecurityTrustStyle('background: #333 url(https://coursehunters.net/images/logo.png) no-repeat');
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
  }

  handleInput(event: any): void {
    this.name = event.target.value;
  }

  handleBlur(event: any): void {
    event.target.value = event.target.value || this.name;
  }
}
