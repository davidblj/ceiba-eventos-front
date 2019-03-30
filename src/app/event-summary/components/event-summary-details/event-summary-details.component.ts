import { Component, OnInit, Input } from '@angular/core';
import { EventSummary } from '../../shared/event-summary.interface';

@Component({
  selector: 'app-event-summary-details',
  templateUrl: './event-summary-details.component.html',
  styleUrls: ['./event-summary-details.component.scss']
})
export class EventSummaryDetailsComponent implements OnInit {

  @Input()
  eventSummary: EventSummary;
  
  resourcesSectionName = 'Recursos';
  attendantsSectionName = 'Participantes';

  constructor() { }

  ngOnInit() {
  }

  get resources() {
    return this.eventSummary ? this.eventSummary.resources : null;
  }

  get attendants() {
    return this.eventSummary ? this.eventSummary.attendants : null;
  }
}
