import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../shared/tabs.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-categories-navigation',
  templateUrl: './event-categories-navigation.component.html',
  styleUrls: ['./event-categories-navigation.component.scss']
})
export class EventCategoriesNavigationComponent implements OnInit {

  currentTab = Tabs.inManagement;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTabClickHandler(currentTab: Tabs) {
    this.currentTab = currentTab;
  }

  onNewEventButtonClick() {
    this.router.navigate(['eventos', 'agregar']);
  }
}
