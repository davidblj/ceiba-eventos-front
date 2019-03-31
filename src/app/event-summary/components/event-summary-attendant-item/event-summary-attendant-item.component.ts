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

  get day() {
    return new Date(this.date).getDate();
  }

  get month() {
    return new Date(this.date).getMonth() + 1;
  }

  get hours() {
    return new Date(this.date).getHours();
  }

  get minutes() {
    return new Date(this.date).getMinutes();
  }
  
  get date() {
    return this.attendant.insertionDate;
  }
}
