import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCategoriesComponent } from './components/event-categories/event-categories.component';
import { EventCategoriesNavigationComponent } from './components/event-categories-navigation/event-categories-navigation.component';
import { EventCategoriesListComponent } from './components/event-categories-list/event-categories-list.component';
import { EventCategoriesItemComponent } from './components/event-categories-item/event-categories-item.component';
import { EventCategoriesRoutingModule } from './event-categories-routing.module';
import { MaterialModule } from '../material/material.module';
import { EventCategoriesTabComponent } from './components/event-categories-tab/event-categories-tab.component';
import { EventCategoriesTabsComponent } from './components/event-categories-tabs/event-categories-tabs.component';
import { ListContainerComponent } from './containers/list-container/list-container.component';

@NgModule({
  declarations: [
    EventCategoriesComponent, 
    EventCategoriesNavigationComponent, 
    EventCategoriesListComponent, 
    EventCategoriesItemComponent, 
    EventCategoriesTabComponent, 
    EventCategoriesTabsComponent, 
    ListContainerComponent
  ],
  imports: [
    CommonModule,
    EventCategoriesRoutingModule,
    MaterialModule
  ]
})
export class EventCategoriesModule { }
