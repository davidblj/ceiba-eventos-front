import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../shared/location.interface';

@Component({
  selector: 'app-event-management-location-form',
  templateUrl: './event-management-location-form.component.html',
  styleUrls: ['./event-management-location-form.component.scss']
})
export class EventManagementLocationFormComponent implements OnInit {

  @Input()
  locations: Location[];
  
  @Output()
  onAddNewLocation = new EventEmitter<Location>();

  selectedLocation: String;
  locationControl: FormControl;
  eventId: number;

  constructor(route: ActivatedRoute) {
    this.setFormControl();
    this.getEventId(route);
  }

  ngOnInit() { }

  getEventId(route: ActivatedRoute) {
    route.params.subscribe(params => { this.eventId = params['id']; });
  }

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
    const location: Location = { name: this.locationControl.value, 'event_id': this.eventId };
    this.onAddNewLocation.emit(location);
  }
}
