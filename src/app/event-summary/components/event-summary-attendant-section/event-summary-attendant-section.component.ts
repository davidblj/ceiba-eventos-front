import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-summary-attendant-section',
  templateUrl: './event-summary-attendant-section.component.html',
  styleUrls: ['./event-summary-attendant-section.component.scss']
})
export class EventSummaryAttendantSectionComponent implements OnInit {  

  @Input()
  sectionName: String;

  constructor() { }

  ngOnInit() {
  }

}
