import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddEventRoutingModule } from './add-event-routing.module';
import { FormContainerComponent } from './containers/form-container/form-container.component';
import { AddEventFormComponent } from './components/add-event-form/add-event-form.component';
import { MaterialModule } from '../material/material.module';
import { AddEventResourcesComponent } from './components/add-event-resources/add-event-resources.component';
import { AddEventResourceItemComponent } from './components/add-event-resource-item/add-event-resource-item.component';
import { AddEventNewItemComponent } from './components/add-event-new-item/add-event-new-item.component';
import { AddEventInputsComponent } from './components/add-event-inputs/add-event-inputs.component';
import { AddEventSectionIconComponent } from './components/add-event-section-icon/add-event-section-icon.component';

@NgModule({
  declarations: [
    AddEventComponent,
    FormContainerComponent,
    AddEventFormComponent,
    AddEventResourcesComponent,
    AddEventResourceItemComponent,
    AddEventNewItemComponent,
    AddEventInputsComponent,
    AddEventSectionIconComponent
  ],
  imports: [
    CommonModule,
    AddEventRoutingModule,
    MaterialModule,
  ]
})
export class AddEventModule { }
