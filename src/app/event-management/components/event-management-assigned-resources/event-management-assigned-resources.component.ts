import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-management-assigned-resources',
  templateUrl: './event-management-assigned-resources.component.html',
  styleUrls: ['./event-management-assigned-resources.component.scss']
})
export class EventManagementAssignedResourcesComponent implements OnInit {

  resources = ['Beers', 'Peanut', 'Gift Card', 'Bonusses']

  constructor() { }

  ngOnInit() {
  }

}
