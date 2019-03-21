import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { ResourceService } from '../../shared/services/resource.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventResources } from 'src/app/shared/interfaces/event-resources.interface';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { ResourceQuantity } from '../../shared/resource-quantity.interface';
import { LocalResourceQuantity } from '../../shared/local-resource-quantity';
import { FormArray } from '@angular/forms';
import { EventManagementResourcePickerComponent } from '../../components/event-management-resource-picker/event-management-resource-picker.component';

@Component({
  selector: 'app-resource-picker-container',
  templateUrl: './resource-picker-container.component.html',
  styleUrls: ['./resource-picker-container.component.scss']
})
export class ResourcePickerContainerComponent implements OnInit {

  @ViewChild(EventManagementResourcePickerComponent)
  resourcePickerChildComponent: EventManagementResourcePickerComponent;

  @Input()
  assignedResourcesControl: FormArray;

  eventId: number;
  favoriteResourceId: number;
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

  getEventId() {
    this.activatedRoute.params.subscribe(params => { this.eventId = params['id']; });
  }

  getEventResources() {
    this.eventResources$ = this.eventService.getResources(this.eventId);       
  }  
  
  // TODO: change localQuantity with an accurate name
  initializeQuantitiesArray() {

    this.eventResources$.subscribe(eventResources => {
      
      this.favoriteResourceId = this.getFavoriteResourceId(eventResources.favoriteResource, 
                                                           eventResources.resources);
      this.quantities = eventResources.resources.map(resource => {
        return this.newLocalQuantityFor(resource);
      });
    });        
  }

  getFavoriteResourceId(favoriteResourceName: String, resources: Resource[]) {

    return resources.find(resource => favoriteResourceName === resource.name).id;
  }

  newLocalQuantityFor(resource: Resource): LocalResourceQuantity {

    return {resourceId: resource.id,
            realQuantity: this.getDefaultQuantity(resource.id), 
            localQuantity: this.getDefaultQuantity(resource.id),
            availableQuantity: resource.stock - resource.quantity};
  }

  getDefaultQuantity(resourceId: number): number {
    return resourceId === this.favoriteResourceId ? 1 : 0;
  }

  reserveFavoriteResource() {

    // TODO: call service.
  }

  resetQuantitiesArray() {

    this.quantities = this.quantities.map(quantity => {
      return {
        resourceId: quantity.resourceId,
        realQuantity: this.getDefaultQuantity(quantity.resourceId),
        localQuantity: this.getDefaultQuantity(quantity.resourceId),
        availableQuantity: quantity.availableQuantity
      };
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
        return quantityMatches ?  this.handleStateUpdateOf(quantity) : quantity;
      });
    };
  }

  handleStateUpdateOf(quantity: LocalResourceQuantity) {

    const updatedLocalResourceQuantity = this.getUpdated(quantity);
    this.resourcePickerChildComponent.setAttendantResourceIntoItsParentForm(updatedLocalResourceQuantity);
    return updatedLocalResourceQuantity;
  }

  getUpdated(localQuantity: LocalResourceQuantity): LocalResourceQuantity {
    
    const localIncreasedAmount = localQuantity.localQuantity - localQuantity.realQuantity;
    const availableQuantity = localQuantity.availableQuantity - localIncreasedAmount;

    const updatedLocalResourceQuantity = this.buildUpdatedLocalResourceQuantity(localQuantity, availableQuantity);    
    return updatedLocalResourceQuantity;                    
  }

  buildUpdatedLocalResourceQuantity(localQuantity: LocalResourceQuantity, availableQuantity: number)
                                    : LocalResourceQuantity {

    return {localQuantity: localQuantity.localQuantity, 
            realQuantity: localQuantity.localQuantity,
            resourceId: localQuantity.resourceId,
            availableQuantity: availableQuantity};                                        
  }

  handleFailedResponse(resourceQuantity: ResourceQuantity) {

    return () => {

      this.quantities = this.quantities.map(localQuantity => {
        const quantityMatches = localQuantity.resourceId === resourceQuantity.resourceId;
        return quantityMatches ? this.getResetted(localQuantity) : localQuantity;        
      });
    };
  }

  getResetted(localQuantity: LocalResourceQuantity): LocalResourceQuantity {

    return {localQuantity: localQuantity.realQuantity, 
            realQuantity: localQuantity.realQuantity,
            resourceId: localQuantity.resourceId,
            availableQuantity: localQuantity.availableQuantity};
  }       
}
