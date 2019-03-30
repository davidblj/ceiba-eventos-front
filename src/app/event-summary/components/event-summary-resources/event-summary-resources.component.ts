import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../shared/resource.interface';

@Component({
  selector: 'app-event-summary-resources',
  templateUrl: './event-summary-resources.component.html',
  styleUrls: ['./event-summary-resources.component.scss']
})
export class EventSummaryResourcesComponent implements OnInit {

  @Input()
  resources: Resource[];
  
  constructor() { }

  ngOnInit() {
  }
}
