import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-management-location-input',
  templateUrl: './event-management-location-input.component.html',
  styleUrls: ['./event-management-location-input.component.scss']
})
export class EventManagementLocationInputComponent implements OnInit {

  @Input()
  set defaultValue(defaultValue: String) {
    this.setControlvalue(defaultValue);
  }

  @Input()
  locationControl: FormControl;

  @Output()
  onChange = new EventEmitter<String>();

  default: String;

  constructor() {
  }

  ngOnInit() {
    this.locationControl.valueChanges.subscribe(value => this.onChange.emit(value));
  }

  setControlvalue(defaultValue: String) {

    if (this.locationControl && defaultValue !== '') {

      // a manual set must be performed to update the
      // value length hint
      this.locationControl.setValue(defaultValue);
    }
  }

  get value() {
    return this.locationControl.value;
  }

  get isInvalid() {
    return this.locationControl.invalid;
  }
}
