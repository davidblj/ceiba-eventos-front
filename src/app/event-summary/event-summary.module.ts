import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSummaryGeneralDetailsComponent } from './components/event-summary-general-details/event-summary-general-details.component';
import { EventSummaryComponent } from './components/event-summary/event-summary.component';
import { EventSummaryRoutingModule } from './event-summary-routing.module';
import { EventSummaryAttendantRundownComponent } from './components/event-summary-attendant-rundown/event-summary-attendant-rundown.component';
import { MaterialModule } from '../material/material.module';
import { EventSummaryResourcesComponent } from './components/event-summary-resources/event-summary-resources.component';
import { EventSummaryResourceItemComponent } from './components/event-summary-resource-item/event-summary-resource-item.component';
import { EventSummaryDetailsComponent } from './components/event-summary-details/event-summary-details.component';

@NgModule({
  declarations: [
    EventSummaryGeneralDetailsComponent, 
    EventSummaryComponent, 
    EventSummaryAttendantRundownComponent, 
    EventSummaryResourcesComponent,
     EventSummaryResourceItemComponent,
     EventSummaryDetailsComponent
  ],
  imports: [
    CommonModule,
    EventSummaryRoutingModule,
    MaterialModule
  ]
})
export class EventSummaryModule { }
