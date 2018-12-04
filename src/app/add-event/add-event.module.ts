import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddEventRoutingModule } from './add-event-routing.module';
import { FormContainerComponent } from './containers/form-container/form-container.component';
import { AddEventFormComponent } from './components/add-event-form/add-event-form.component';
import { MaterialModule } from '../material/material.module';
import { AddEventNewItemComponent } from './components/add-event-new-item/add-event-new-item.component';
import { AddEventSectionIconComponent } from './components/add-event-section-icon/add-event-section-icon.component';
import { AddEventResourceDialogComponent } from './components/add-event-resource-dialog/add-event-resource-dialog.component';
import { AddEventAmountComponent } from './components/add-event-amount/add-event-amount.component';
import { DefaultTextInputComponent } from './components/add-event-form-fields/default-text-input/default-text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultNumericInputComponent } from './components/add-event-form-fields/default-numeric-input/default-numeric-input.component';
import { AddEventNewItemSectionComponent } from './components/add-event-new-item-section/add-event-new-item-section.component';

@NgModule({
  declarations: [
    AddEventComponent,
    FormContainerComponent,
    AddEventFormComponent,        
    AddEventNewItemComponent,    
    AddEventSectionIconComponent,
    AddEventResourceDialogComponent,
    AddEventAmountComponent,
    DefaultTextInputComponent,
    DefaultNumericInputComponent,
    AddEventNewItemSectionComponent
  ],
  imports: [
    CommonModule,
    AddEventRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddEventResourceDialogComponent
  ]
})
export class AddEventModule { }
