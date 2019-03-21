import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-summary-resources',
  templateUrl: './event-summary-resources.component.html',
  styleUrls: ['./event-summary-resources.component.scss']
})
export class EventSummaryResourcesComponent implements OnInit {

  resources = [{name: "Beers", amount: 50, used: 24}, {name: "Pistachios", amount: 20, used: 14}];

  constructor() { }

  ngOnInit() {
  }

}
