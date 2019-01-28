import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-management-assigned-resource-item',
  templateUrl: './event-management-assigned-resource-item.component.html',
  styleUrls: ['./event-management-assigned-resource-item.component.scss']
})
export class EventManagementAssignedResourceItemComponent implements OnInit {

  @Input()
  name: String;

  constructor() { }

  ngOnInit() {
  }

}
