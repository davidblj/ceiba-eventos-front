import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Locations } from '../../shared/locations.interface';

@Component({
  selector: 'app-event-management-location-list',
  templateUrl: './event-management-location-list.component.html',
  styleUrls: ['./event-management-location-list.component.scss']
})
export class EventManagementLocationListComponent implements OnInit {

  @Input()
  locations: Locations

  @Input()
  selectedLocation: String;

  @Output()
  onSelection = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onClickHandler(name: String) {
    this.selectedLocation = name;
    this.onSelection.emit(name);
  }

  get locationList() {
    return this.locations ? this.locations.locations : [];
  }
}
