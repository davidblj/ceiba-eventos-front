import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { AssignedResource } from '../../shared/attendant-resource.interface';

@Component({
  selector: 'app-event-management-assigned-resources',
  templateUrl: './event-management-assigned-resources.component.html',
  styleUrls: ['./event-management-assigned-resources.component.scss']
})
export class EventManagementAssignedResourcesComponent implements OnInit {

  @Input()
  resources: Resource[];

  @Input()
  assignedResources: AssignedResource[];  

  constructor() { }

  ngOnInit() {
  }

  get assignedResourcesStatus() {
    
    return this.resources.map(resource => {
      return {
          name: resource.name,
          assigned: this.resourceStatus(resource)
      };
    });
  }

  resourceStatus(resource: Resource): boolean {
    
    return this.assignedResources.some(assignedResources => 
      assignedResources.resource_id === resource.id
    );
  }
}
