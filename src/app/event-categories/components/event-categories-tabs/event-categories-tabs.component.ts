import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Tabs } from '../../shared/tabs.enum';

@Component({
  selector: 'app-event-categories-tabs',
  templateUrl: './event-categories-tabs.component.html',
  styleUrls: ['./event-categories-tabs.component.scss']
})
export class EventCategoriesTabsComponent implements OnInit {

  @Output()
  onTabClick = new EventEmitter<Tabs>();  

  currentTab: Tabs;

  constructor() { }

  ngOnInit() {
    this.currentTab = this.inManagementEnumCode;
  }

  onClickHandler() {
    
    this.currentTab = this.currentTab === Tabs.inManagement ? 
                      Tabs.finished : 
                      Tabs.inManagement;

    this.onTabClick.emit(this.currentTab);
  }

  get inManagementEnumCode() { 
    return Tabs.inManagement;
  }

  get finishedEnumCode() {
    return Tabs.finished;
  }

  get currentTabName() {
    
    return this.currentTab === Tabs.inManagement ? 
            "En gestion" : 
            "Terminados";
  }
}
