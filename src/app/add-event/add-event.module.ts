import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddEventRoutingModule } from './add-event-routing.module';
import { FormContainerComponent } from './containers/form-container/form-container.component';
import { AddEventFormComponent } from './components/add-event-form/add-event-form.component';

@NgModule({
  declarations: [
    AddEventComponent,
    FormContainerComponent,
    AddEventFormComponent
  ],
  imports: [
    CommonModule,
    AddEventRoutingModule
  ]
})
export class AddEventModule { }
