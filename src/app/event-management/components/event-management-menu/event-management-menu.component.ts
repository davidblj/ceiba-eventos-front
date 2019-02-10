import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-management-menu',
  templateUrl: './event-management-menu.component.html',
  styleUrls: ['./event-management-menu.component.scss']
})
export class EventManagementMenuComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

  onMenuToggleClick() {
    this.showMenu = !this.showMenu
  }

  onBackgroundClick() {
    this.showMenu = !this.showMenu    
  }
}
