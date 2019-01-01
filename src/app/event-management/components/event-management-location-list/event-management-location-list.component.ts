import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-event-management-location-list',
  templateUrl: './event-management-location-list.component.html',
  styleUrls: ['./event-management-location-list.component.scss']
})
export class EventManagementLocationListComponent implements OnInit {

  locationList = [{name: 'Personal Soft'}, {name: 'Camacol'}, {name: 'Ceiba'}, {name: 'Agaval'}, {name: 'Avianca'}, {name: 'Proteccion'}];

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
}
