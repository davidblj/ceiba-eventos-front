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

  get organizerDetails() {
      
    return {
      organizer: "Laura Bollago",
      location: this.attendant.location
    };
  }
}
