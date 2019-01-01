import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { EventManagementRoutingModule } from './event-management-routing.module';
import { EventManagementFormComponent } from './components/event-management-form/event-management-form.component';
import { EventManagementLocationInputComponent } from './components/event-management-location-input/event-management-location-input.component';
import { MaterialModule } from '../material/material.module';
import { EventManagementLocationListComponent } from './components/event-management-location-list/event-management-location-list.component';
import { EventManagementLocationItemComponent } from './components/event-management-location-item/event-management-location-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventManagementComponent,
    EventManagementFormComponent,
    EventManagementLocationInputComponent,
    EventManagementLocationListComponent,
    EventManagementLocationItemComponent
  ],
  imports: [
    CommonModule,
    EventManagementRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class EventManagementModule { }
