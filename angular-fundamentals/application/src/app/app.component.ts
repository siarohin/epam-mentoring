import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ChildActivationStart } from '@angular/router';


interface Child {
  name: string;
  age: number;
}
interface People {
  id: number;
  name: string;
  sex: string;
  isActive: boolean;
  children: Child[] | null;
}

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

  people: People[] = [{
    id: 1,
    name: 'Ann',
    sex: 'female',
    isActive: true,
    children: null,
  },
  {
    id: 2,
    name: 'Aleksandr',
    sex: 'male',
    isActive: true,
    children: [{
      name: 'Tedd',
      age: 20,
    }],
  },
  {
    id: 3,
    name: 'Siarhei',
    sex: 'male',
    isActive: false,
    children: [{
      name: 'Teddy',
      age: 15,
    },
    {
      name: 'Alice',
      age: 10,
    }],
  },
  {
    id: 4,
    name: 'Oleg',
    sex: 'male',
    isActive: false,
    children: null,
  },
];


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
