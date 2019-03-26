import { Component, OnInit } from '@angular/core';
import { People } from '../../models/dashboard.interface';

@Component ({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  people: People[];
  constructor() {

  }
  ngOnInit() {
    this.people = [
      {
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
    }];
  }

  handleEdit(event: People) {
    this.people.map((person: People) => {
      if (person.id === event.id) {
        // Immutable
        person = Object.assign({}, person, event);
      }
      return person;
    });
  }

  handleRemove(event: People) {
    this.people = this.people.filter((person: People) => {
      return person.id !== event.id;
    });
  }
}

