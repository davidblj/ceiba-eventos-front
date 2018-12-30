import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { EventManagementRoutingModule } from './event-management-routing.module';
import { EventManagementFormComponent } from './components/event-management-form/event-management-form.component';
import { EventManagementLocationInputComponent } from './components/event-management-location-input/event-management-location-input.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    EventManagementComponent,
    EventManagementFormComponent,
    EventManagementLocationInputComponent
  ],
  imports: [
    CommonModule,
    EventManagementRoutingModule,
    MaterialModule
  ]
})
export class EventManagementModule { }
