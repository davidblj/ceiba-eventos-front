import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../shared/resource.interface';

@Component({
  selector: 'app-event-summary-resource-item',
  templateUrl: './event-summary-resource-item.component.html',
  styleUrls: ['./event-summary-resource-item.component.scss']
})
export class EventSummaryResourceItemComponent implements OnInit {

  @Input()
  resource: Resource;

  constructor() { }

  ngOnInit() {
  }
}
