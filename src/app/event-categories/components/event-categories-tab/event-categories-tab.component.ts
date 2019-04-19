import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-categories-tab',
  templateUrl: './event-categories-tab.component.html',
  styleUrls: ['./event-categories-tab.component.scss']
})
export class EventCategoriesTabComponent implements OnInit {

  @Input()
  name: String;

  constructor() { }

  ngOnInit() {
  }

}
