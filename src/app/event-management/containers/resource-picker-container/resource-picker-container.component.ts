import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { ResourceService } from '../../shared/services/resource.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventResources } from 'src/app/shared/interfaces/event-resources.interface';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { ResourceQuantity } from '../../shared/resource-quantity.interface';
import { LocalResourceQuantity } from '../../shared/local-resource-quantity';

@Component({
  selector: 'app-resource-picker-container',
  templateUrl: './resource-picker-container.component.html',
  styleUrls: ['./resource-picker-container.component.scss']
})
export class ResourcePickerContainerComponent implements OnInit {

  eventId: number;
  eventResources$: Observable<EventResources>;
  quantities: LocalResourceQuantity[];

  constructor(private eventService: EventService, private resourceService: ResourceService, 
              private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.getEventId();
    this.getEventResources();
    this.initializeQuantitiesArray();     
  }

  getEventResources() {
    this.eventResources$ = this.eventService.getResources(this.eventId);       
  }

  getEventId() {
    this.activatedRoute.params.subscribe(params => { this.eventId = params['id']; });
  }
  
  initializeQuantitiesArray() {

    this.eventResources$.subscribe(eventResources => {
      
      this.quantities = eventResources.resources.map(resource => {
        return this.newLocalQuantityFor(resource);
      });
    });        
  }

  onAmountChangedHandler(resourceQuantity: ResourceQuantity) {    
    
    this.resourceService.setResourceQuantityToEventId(resourceQuantity, this.eventId).subscribe(
      this.handleSuccessfullResponse(resourceQuantity),
      this.handleFailedResponse(resourceQuantity)
    );
  }  

  handleSuccessfullResponse(resourceQuantity: ResourceQuantity) {

    return () => {
      
      this.quantities = this.quantities.map(quantity => {

        const quantityMatches = quantity.resourceId === resourceQuantity.resourceId;
        return quantityMatches ? this.update(quantity) : quantity;        
      });
    };
  }

  handleFailedResponse(resourceQuantity: ResourceQuantity) {

    return () => {

      this.quantities = this.quantities.map(localQuantity => {

        const quantityMatches = localQuantity.resourceId === resourceQuantity.resourceId;
        return quantityMatches ? this.reset(localQuantity) : localQuantity;        
      });
    };
  }

  reset(localQuantity: LocalResourceQuantity): LocalResourceQuantity {

    return {localQuantity: localQuantity.realQuantity, 
            realQuantity: localQuantity.realQuantity,
            resourceId: localQuantity.resourceId,
            availableQuantity: localQuantity.availableQuantity};
  }

  update(localQuantity: LocalResourceQuantity): LocalResourceQuantity {
    
    const localIncreasedAmount = localQuantity.localQuantity - localQuantity.realQuantity;
    const availableQuantity = localQuantity.availableQuantity - localIncreasedAmount;

    return {localQuantity: localQuantity.localQuantity, 
            realQuantity: localQuantity.localQuantity,
            resourceId: localQuantity.resourceId,
            availableQuantity: availableQuantity};        
  }
  
  newLocalQuantityFor(resource: Resource): LocalResourceQuantity {

    return {resourceId: resource.id, 
            realQuantity: 0, 
            localQuantity: 0,
            availableQuantity: resource.stock - resource.quantity};
  } 
}
