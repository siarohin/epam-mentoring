import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { People } from '../../models/dashboard.interface';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})

export class DashboardDetailComponent implements OnChanges {
  @Input()
  detail: People;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing = false;

  constructor() {
  }

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
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
