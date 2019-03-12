import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { ResourceQuantity } from '../../shared/resource-quantity.interface';
import { LocalResourceQuantity } from '../../shared/local-resource-quantity';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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

  @Input()
  assignedResourcesControl: FormArray;

  @Output()
  onAmountChanged = new EventEmitter<ResourceQuantity>();  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onAmountChangedHandler(resourceQuantity: ResourceQuantity) {    
    this.onAmountChanged.emit(resourceQuantity);
  }

  getResourceQuantity(id: number): LocalResourceQuantity {
    return this.quantities.find(resourceQuantity => resourceQuantity.resourceId === id);
  }

  setAttendantResourceIntoItsParentForm(localResourceQuantity: LocalResourceQuantity) {
    
    const mustUnsetAttendantResource = localResourceQuantity.localQuantity === 0;
    if (mustUnsetAttendantResource) {
      this.unsetAttendantResourceFor(localResourceQuantity);
    } else {
      this.setOrUpdateAttendantResourceFor(localResourceQuantity);
    }                   
  }

  unsetAttendantResourceFor(localResourceQuantity: LocalResourceQuantity) {

    const attendantResourceIndex = this.getAttendantResourceIndex(localResourceQuantity.resourceId);    
    this.assignedResourcesControl.removeAt(attendantResourceIndex);
  }

  setOrUpdateAttendantResourceFor(localResourceQuantity: LocalResourceQuantity) {
    
    const attendantResourceIndex = this.getAttendantResourceIndex(localResourceQuantity.resourceId);    
    const attendantResource = this.createNewAttendantResourceFrom(localResourceQuantity);  
    const noAttendantResourceFound = attendantResourceIndex === -1;

    if (noAttendantResourceFound) {      
      this.assignedResourcesControl.push(attendantResource);
    } else {        
      this.assignedResourcesControl.setControl(attendantResourceIndex, attendantResource);
    }
  }

  getAttendantResourceIndex(resourceId: Number): number {

    const attendantResourcesControls = this.assignedResourcesControl.controls.map(control => control.value);
    return attendantResourcesControls.findIndex(attendantResourceControl => {
      return attendantResourceControl.resourceId === resourceId;
    });
  }

  createNewAttendantResourceFrom(localResourceQuantity: LocalResourceQuantity): FormGroup {

    return this.fb.group({
      shared_amount: localResourceQuantity.realQuantity,
      resource_id: localResourceQuantity.resourceId,
    });
  }

  get assignedResources() {
    return this.assignedResourcesControl.value;
  }
}
