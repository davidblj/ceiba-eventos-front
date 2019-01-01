import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-management-location-input',
  templateUrl: './event-management-location-input.component.html',
  styleUrls: ['./event-management-location-input.component.scss']
})
export class EventManagementLocationInputComponent implements OnInit {

  @Input()
  default: String;

  @Output()
  onChange = new EventEmitter<String>();

  control;

  constructor() {
    this.control = new FormControl();
  }

  ngOnInit() {
    this.control.valueChanges.subscribe(value => this.onChange.emit(value));
  }
}
