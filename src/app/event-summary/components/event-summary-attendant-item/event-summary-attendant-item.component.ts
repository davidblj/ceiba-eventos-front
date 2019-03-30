import { Component, OnInit, Input } from '@angular/core';
import { Attendant } from '../../shared/attendant.interface';

@Component({
  selector: 'app-event-summary-attendant-item',
  templateUrl: './event-summary-attendant-item.component.html',
  styleUrls: ['./event-summary-attendant-item.component.scss']
})
export class EventSummaryAttendantItemComponent implements OnInit {

  @Input()
  attendant: Attendant;

  shouldHideDetails = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.shouldHideDetails = !this.shouldHideDetails;
  }
  
}
