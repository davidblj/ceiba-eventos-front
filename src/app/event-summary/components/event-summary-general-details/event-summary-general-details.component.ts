import { Component, OnInit, Input } from '@angular/core';
import { EventSummary } from '../../shared/event-summary.interface';

@Component({
  selector: 'app-event-summary-general-details',
  templateUrl: './event-summary-general-details.component.html',
  styleUrls: ['./event-summary-general-details.component.scss']
})
export class EventSummaryGeneralDetailsComponent implements OnInit {

  @Input()
  eventSummary: EventSummary;

  constructor() { }

  ngOnInit() {
  }

}
