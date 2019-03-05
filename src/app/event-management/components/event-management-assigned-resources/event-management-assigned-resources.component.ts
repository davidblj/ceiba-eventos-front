import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { FormArray } from '@angular/forms';
import { AttendantResource } from '../../shared/attendant-resource.interface';

@Component({
  selector: 'app-event-management-assigned-resources',
  templateUrl: './event-management-assigned-resources.component.html',
  styleUrls: ['./event-management-assigned-resources.component.scss']
})
export class EventManagementAssignedResourcesComponent implements OnInit {

  @Input()
  resources: Resource[];

  @Input()
  attendantResources: AttendantResource[];  

  constructor() { }

  ngOnInit() {
  }

  get assignedResources() {
    
    return this.resources.map(resource => {
      return {
          name: resource.name,
          assigned: this.resourceStatus(resource)
      };
    });
  }

  resourceStatus(resource: Resource): boolean {
    
    return this.attendantResources.some(attendantResource => 
      attendantResource.resourceId === resource.id
    );
  }
}
