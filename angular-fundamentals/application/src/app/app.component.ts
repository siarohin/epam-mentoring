import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ChildActivationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  numberOne = 1;
  numberTwo = 5;
  name = '';
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

  handleChange(value: string): void {
    this.name = value;
  }

  handleClick() {
    this.name = '';
  }
}
