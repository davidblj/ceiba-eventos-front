import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../shared/event.interface';
import { Tabs } from '../../shared/tabs.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-categories-item',
  templateUrl: './event-categories-item.component.html',
  styleUrls: ['./event-categories-item.component.scss']
})
export class EventCategoriesItemComponent implements OnInit {

  @Input()
  event: Event;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  eventIsInManagementMode() {
    return this.event.status  === Tabs.inManagement;
  }    

  onDetailsClick() {
    this.router.navigate(['/', 'eventos', this.event.eventId, 'gestion']);
  }
}
