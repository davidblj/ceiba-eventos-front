import { Component, OnInit, Input } from '@angular/core';
import { OrganizerDetails } from '../../shared/organizer-details.interface';

@Component({
  selector: 'app-event-summary-attendant-organizer-details',
  templateUrl: './event-summary-attendant-organizer-details.component.html',
  styleUrls: ['./event-summary-attendant-organizer-details.component.scss']
})
export class EventSummaryAttendantOrganizerDetailsComponent implements OnInit {

  @Input()
  details: OrganizerDetails;

  constructor() { }

  ngOnInit() {
  }

}
