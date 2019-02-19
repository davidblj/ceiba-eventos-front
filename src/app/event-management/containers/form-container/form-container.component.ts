import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../../shared/services/location.service';
import { Location } from '../../shared/location.interface';
import { Locations } from '../../shared/locations.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  eventId: number;
  locations: Locations;  
  locationIsSet = false;
  location: Location;

  constructor(private locationService: LocationService, route: ActivatedRoute) { 
    this.getEventId(route);
  }

  ngOnInit() {    
    this.getLocations();
  }

  onAddNewLocationHandler(locationName: string) {
    this.locationIsSet = true;
    this.addEventLocation({ name: locationName, 'event_id': Number(this.eventId) });
  }

  getEventId(route: ActivatedRoute) {
    route.params.subscribe(params => { this.eventId = params['id']; });
  }

  getLocations() {

    this.locationService.get().subscribe(locations => {
      this.locations = locations;
    })
  }

  addEventLocation(location: Location) {

    const locationFound = this.locations.locations.find(name => name == location.name);
    let newLocationWasSet = locationFound == null;
    
    if (newLocationWasSet) {
      this.locationService.add(location).subscribe();      
    }    
  }
}
