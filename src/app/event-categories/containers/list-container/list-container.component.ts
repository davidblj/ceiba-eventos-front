import { Component, OnInit, Input } from '@angular/core';
import { Tabs } from '../../shared/tabs.enum';
import { Event } from '../../shared/event.interface';
import { EventService } from '../../shared/services/event.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  
  _currentTab: Tabs;

  @Input()
  set currentTab(currentTab: Tabs) {
    this._currentTab = currentTab;
    this.fetchEvents();
  }

  events: Event[];

  constructor(private eventService: EventService) { }    

  ngOnInit() {     
  }  

  fetchEvents() {

    const savedState = this._currentTab;
    this.eventService.getEventsOn(this.status).subscribe(events => {
      
      this.events = events.map(event => ({ 
        name: event.name, 
        eventId: event.eventId,
        status: savedState})
      );
    });
  }  

  get status() { 
    return this._currentTab === Tabs.finished ? true : false;
  }
}
