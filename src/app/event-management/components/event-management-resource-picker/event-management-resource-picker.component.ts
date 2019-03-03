import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { ResourceQuantity } from '../../shared/resource-quantity.interface';
import { LocalResourceQuantity } from '../../shared/local-resource-quantity';

@Component({
  selector: 'app-event-management-resource-picker',
  templateUrl: './event-management-resource-picker.component.html',
  styleUrls: ['./event-management-resource-picker.component.scss']
})
export class EventManagementResourcePickerComponent implements OnInit {

  @Input()
  resources: Resource[];

  @Input()
  quantities: LocalResourceQuantity[];

  @Output()
  onAmountChanged = new EventEmitter<ResourceQuantity>();  

  constructor() { }

  ngOnInit() {
  }

  onAmountChangedHandler(resource: ResourceQuantity) {    
    this.onAmountChanged.emit(resource);
  }

  getResourceQuantity(id: number): LocalResourceQuantity {
    return this.quantities.find(resourceQuantity => resourceQuantity.resourceId === id)
  }
}
