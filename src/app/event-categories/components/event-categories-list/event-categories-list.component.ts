import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../shared/event.interface';
import { Tabs } from '../../shared/tabs.enum';

@Component({
  selector: 'app-event-categories-list',
  templateUrl: './event-categories-list.component.html',
  styleUrls: ['./event-categories-list.component.scss']
})
export class EventCategoriesListComponent implements OnInit {

  @Input()
  events: Event[];  

  constructor() { }

  ngOnInit() {
  }

  get shouldDisplayWarningMessage() {
    return this.events ? this.events.length === 0 : false;
  }

  get listType() {
    return this.events[0].status;
  }
}
