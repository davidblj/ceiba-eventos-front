import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../shared/location.interface';
import { Locations } from '../../shared/locations.interface';

@Component({
  selector: 'app-event-management-location-form',
  templateUrl: './event-management-location-form.component.html',
  styleUrls: ['./event-management-location-form.component.scss']
})
export class EventManagementLocationFormComponent implements OnInit {

  @Input()
  locations: Locations;
  
  @Output()
  onAddNewLocation = new EventEmitter<String>();

  selectedLocation: String;
  locationControl: FormControl;
  eventId: number;

  constructor(route: ActivatedRoute) {
    this.setFormControl();
  }

  ngOnInit() { }

  setFormControl() {

    this.selectedLocation = '';
    this.locationControl = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]);
  }

  onSelectionHandler(selectedLocation: String) {
    this.selectedLocation = selectedLocation;
  }

  onChangeHandler(inputValue: String) {
    this.selectedLocation = inputValue;
  }

  onClickHandler() {
    this.onAddNewLocation.emit(this.locationControl.value);
  }
}
