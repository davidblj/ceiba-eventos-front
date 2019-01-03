import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../shared/services/location.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  locationIsSet = false;
  location: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  onAddNewLocationHandler(location: Location) {
    this.location = location;
    this.locationIsSet = true;
  }
}
