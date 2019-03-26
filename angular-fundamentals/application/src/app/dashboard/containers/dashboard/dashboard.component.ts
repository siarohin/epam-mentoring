import { Component, OnInit } from '@angular/core';
import { People } from '../../models/dashboard.interface';

import { DashboardService } from '../../dashboard.service';

@Component ({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  people: People[];

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.people = this.dashboardService.getPeople();
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

