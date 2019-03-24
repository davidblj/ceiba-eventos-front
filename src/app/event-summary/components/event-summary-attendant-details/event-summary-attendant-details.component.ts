import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-summary-attendant-details',
  templateUrl: './event-summary-attendant-details.component.html',
  styleUrls: ['./event-summary-attendant-details.component.scss']
})
export class EventSummaryAttendantDetailsComponent implements OnInit {

  @Input()
  attendant: any;

  constructor() { }

  ngOnInit() {
  }

  get organizerDetails() {
    
    return {
      organizer: this.attendant.organizer,
      location: this.attendant.location
    };
  }
}
