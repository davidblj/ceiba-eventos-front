import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../../shared/services/location.service';
import { Location } from '../../shared/location.interface';
import { Locations } from '../../shared/locations.interface';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  locations: Locations;  
  locationIsSet = false;
  location: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.get().subscribe(locations => {
      console.log(locations)
      this.locations = locations;
    })
  }

  onAddNewLocationHandler(location: Location) {
    this.location = location;
    this.locationIsSet = true;
  }
}
