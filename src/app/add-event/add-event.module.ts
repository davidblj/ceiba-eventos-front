import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddEventRoutingModule } from './add-event-routing.module';

@NgModule({
  declarations: [
    AddEventComponent
  ],
  imports: [
    CommonModule,
    AddEventRoutingModule
  ]
})
export class AddEventModule { }
