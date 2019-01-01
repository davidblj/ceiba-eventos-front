import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-management-form',
  templateUrl: './event-management-form.component.html',
  styleUrls: ['./event-management-form.component.scss']
})
export class EventManagementFormComponent implements OnInit {

  selectedLocation: String;

  constructor() { }

  ngOnInit() {
  }

  onSelectionHandler(selectedLocation: String) {
    this.selectedLocation = selectedLocation;
  }

  onChangeHandler(inputValue: String) {
    this.selectedLocation = inputValue;
  }
}
