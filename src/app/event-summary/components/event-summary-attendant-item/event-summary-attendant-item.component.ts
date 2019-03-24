import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-summary-attendant-item',
  templateUrl: './event-summary-attendant-item.component.html',
  styleUrls: ['./event-summary-attendant-item.component.scss']
})
export class EventSummaryAttendantItemComponent implements OnInit {

  @Input()
  attendant: any;

  shouldHideDetails = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.shouldHideDetails = !this.shouldHideDetails;
  }
  
}
