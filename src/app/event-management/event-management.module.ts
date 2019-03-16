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
import { EventManagementAssignedResourcesComponent } from './components/event-management-assigned-resources/event-management-assigned-resources.component';
import { EventManagementAssignedResourceItemComponent } from './components/event-management-assigned-resource-item/event-management-assigned-resource-item.component';
import { EventManagementResourcePickerComponent } from './components/event-management-resource-picker/event-management-resource-picker.component';
import { EventManagementResourceItemComponent } from './components/event-management-resource-item/event-management-resource-item.component';
import { EventManagementMenuComponent } from './components/event-management-menu/event-management-menu.component';
import { SharedModule } from '../shared/shared.module';
import { ResourcePickerContainerComponent } from './containers/resource-picker-container/resource-picker-container.component';
import { SearchTextInputComponent } from './components/event-management-form-fields/search-text-input/search-text-input.component';
import { AttendantInputContainerComponent } from './containers/attendant-input-container/attendant-input-container.component';
import { EmployeeService } from './shared/services/employee.service';
import { EventManagementSnackbarComponent } from './components/event-management-snackbar/event-management-snackbar.component';


@NgModule({
  declarations: [
    EventManagementComponent,
    EventManagementLocationFormComponent,
    EventManagementLocationInputComponent,
    EventManagementLocationListComponent,
    EventManagementLocationItemComponent,
    FormContainerComponent,
    EventManagementFormComponent,
    EventManagementAssignedResourcesComponent,
    EventManagementAssignedResourceItemComponent,
    EventManagementResourcePickerComponent,
    EventManagementResourceItemComponent,
    EventManagementMenuComponent,
    ResourcePickerContainerComponent,
    SearchTextInputComponent,
    AttendantInputContainerComponent,
    EventManagementSnackbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventManagementRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EventManagementSnackbarComponent
  ],
  providers: [
    LocationService,
    EmployeeService
  ]
})
export class EventManagementModule { }
