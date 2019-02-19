import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { ManagedResource } from '../../shared/resource.interface';

@Component({
  selector: 'app-event-management-resource-picker',
  templateUrl: './event-management-resource-picker.component.html',
  styleUrls: ['./event-management-resource-picker.component.scss']
})
export class EventManagementResourcePickerComponent implements OnInit {

  @Input()
  resources: Resource[];

  @Input()
  onAmountChanged = new EventEmitter<ManagedResource>();

  constructor() { }

  ngOnInit() {
  }

  onAmountChangedHandler(resource: ManagedResource) {
    this.onAmountChanged.emit(resource);
  }
}
