import { Component, OnInit, Input } from '@angular/core';
import { Attendant } from '../../shared/attendant.interface';

@Component({
  selector: 'app-event-summary-attendant-details',
  templateUrl: './event-summary-attendant-details.component.html',
  styleUrls: ['./event-summary-attendant-details.component.scss']
})
export class EventSummaryAttendantDetailsComponent implements OnInit {

  @Input()
  attendant: Attendant;

  constructor() { }

  ngOnInit() {
  }

  get resources() {
    return this.attendant.assignedResources;    
  }

  // todo: the organizer details should be provided by the attendants object itself 
  get organizerDetails() {
    
    // return {
    //   organizer: this.attendant.organizer,
    //   location: this.attendant.location
    // };

    return {
      organizer: "Laura Bollago",
      location: "Personal Soft"
    };
  }
}
