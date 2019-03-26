import { Component, Input, Output, EventEmitter } from '@angular/core';
import { People } from '../../models/dashboard.interface';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})

export class DashboardDetailComponent {
  @Input()
  detail: People;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing = false;
  constructor() {
  }

  onNameChange(value: string) {
    this.detail.name = value;
  }

  toogleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}
