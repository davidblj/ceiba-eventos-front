import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LocationService } from '../../shared/services/location.service';
import { Location } from '../../shared/location.interface';
import { Locations } from '../../shared/locations.interface';
import { ActivatedRoute } from '@angular/router';
import { Attendant } from '../../shared/attendant.interface';
import { AttendantService } from '../../shared/services/attendant.service';
import { EventManagementFormComponent } from '../../components/event-management-form/event-management-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  @ViewChild(EventManagementFormComponent)
  eventManagementFormComponent: EventManagementFormComponent;

  eventId: number;
  locations: Locations;  
  locationIsSet = false;
  location: Location;

  constructor(private locationService: LocationService, private attendantService: AttendantService, 
              route: ActivatedRoute) { 
    this.getEventId(route);    
  }

  ngOnInit() {      
    this.getLocations();
  }

  onAddNewLocationHandler(locationName: string) {
    this.locationIsSet = true;
    this.addEventLocation({ name: locationName, 'event_id': Number(this.eventId) });
  }

  onAddNewAttendantHandler(attendant: Attendant) {
    
    attendant.event_id = this.eventId;
    this.attendantService.add(attendant).subscribe(
      this.handleSuccessfullResponse()
    );    
  }

  handleSuccessfullResponse() {

    return () => {
      this.eventManagementFormComponent.handleFormSuccessfulSubmit();
    };
  }

  getEventId(route: ActivatedRoute) {

    route.params.subscribe(params => { 

      const eventIdString = params['id'];
      this.eventId = Number(eventIdString); 
    });
  }

  getLocations() {
    this.locationService.get().subscribe(locations => {
      this.locations = locations;
    });
  }

  addEventLocation(location: Location) {

    const locationFound = this.locations.locations.find(name => name === location.name);
    const newLocationWasSet = locationFound == null;
    
    if (newLocationWasSet) {
      this.locationService.add(location).subscribe();      
    }    
  }
}
