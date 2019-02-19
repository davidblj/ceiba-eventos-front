import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventResources } from 'src/app/shared/interfaces/event-resources.interface';
import { ManagedResource } from '../../shared/resource.interface';

@Component({
  selector: 'app-resource-picker-container',
  templateUrl: './resource-picker-container.component.html',
  styleUrls: ['./resource-picker-container.component.scss']
})
export class ResourcePickerContainerComponent implements OnInit {

  eventId: number;
  eventResources$: Observable<EventResources>;

  constructor(private eventService: EventService, route: ActivatedRoute) { 
    this.getEventId(route);
  }

  ngOnInit() {
    this.getEventResources();
  }

  getEventResources() {
    this.eventResources$ = this.eventService.getResources(this.eventId)
  }

  getEventId(route: ActivatedRoute) {
    route.params.subscribe(params => { this.eventId = params['id']; });
  }

  onAmountChangedHandler(managedResource: ManagedResource) {
    
  }
}
