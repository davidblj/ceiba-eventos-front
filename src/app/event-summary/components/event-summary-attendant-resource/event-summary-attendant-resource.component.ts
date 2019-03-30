import { Component, OnInit, Input } from '@angular/core';
import { AssignedResource } from '../../shared/assigned-resource.interface';

@Component({
  selector: 'app-event-summary-attendant-resource',
  templateUrl: './event-summary-attendant-resource.component.html',
  styleUrls: ['./event-summary-attendant-resource.component.scss']
})
export class EventSummaryAttendantResourceComponent implements OnInit {

  @Input()
  resource: AssignedResource;

  constructor() { }

  ngOnInit() {
  }

}
