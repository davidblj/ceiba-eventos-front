import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { EventManagementRoutingModule } from './event-management-routing.module';
import { EventManagementLocationFormComponent } from './components/event-management-location-form/event-management-location-form.component';
import { EventManagementLocationInputComponent } from './components/event-management-location-input/event-management-location-input.component';
import { MaterialModule } from '../material/material.module';
import { EventManagementLocationListComponent } from './components/event-management-location-list/event-management-location-list.component';
import { EventManagementLocationItemComponent } from './components/event-management-location-item/event-management-location-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from './containers/form-container/form-container.component';
import { LocationService } from './shared/services/location.service';
import { EventManagementFormComponent } from './components/event-management-form/event-management-form.component';

@NgModule({
  declarations: [
    EventManagementComponent,
    EventManagementLocationFormComponent,
    EventManagementLocationInputComponent,
    EventManagementLocationListComponent,
    EventManagementLocationItemComponent,
    FormContainerComponent,
    EventManagementFormComponent
  ],
  imports: [
    CommonModule,
    EventManagementRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    LocationService
  ]
})
export class EventManagementModule { }
