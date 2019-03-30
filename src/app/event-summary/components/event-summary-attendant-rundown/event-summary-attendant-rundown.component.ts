import { Component, OnInit, Input } from '@angular/core';
import { EventSummary } from '../../shared/event-summary.interface';

@Component({
  selector: 'app-event-summary-attendant-rundown',
  templateUrl: './event-summary-attendant-rundown.component.html',
  styleUrls: ['./event-summary-attendant-rundown.component.scss']
})
export class EventSummaryAttendantRundownComponent implements OnInit {

  @Input()
  eventSummary: EventSummary;

  constructor() { }

  ngOnInit() {
  }

  get numericCounter() {
    return this.eventSummary ? this.eventSummary.attendants.length : 0;
  }
}
