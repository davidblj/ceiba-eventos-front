import { Component, OnInit, Input } from '@angular/core';
import { Attendant } from '../../shared/attendant.interface';

@Component({
  selector: 'app-event-summary-attendants',
  templateUrl: './event-summary-attendants.component.html',
  styleUrls: ['./event-summary-attendants.component.scss']
})
export class EventSummaryAttendantsComponent implements OnInit {

  @Input()
  attendants: Attendant[];

  constructor() { }

  ngOnInit() {
  }

  get noParticipantsRegistered() {
    return this.attendants.length === 0;
  }
}
