import { Component, OnInit, Input } from '@angular/core';
import { AssignedResource } from '../../shared/assigned-resource.interface';

@Component({
  selector: 'app-event-management-assigned-resource-item',
  templateUrl: './event-management-assigned-resource-item.component.html',
  styleUrls: ['./event-management-assigned-resource-item.component.scss']
})
export class EventManagementAssignedResourceItemComponent implements OnInit {

  @Input()
  assignedResource: AssignedResource;

  constructor() { }

  ngOnInit() {
  }

}
