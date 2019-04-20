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
import { EventSummaryAttendantsComponent } from './components/event-summary-attendants/event-summary-attendants.component';
import { EventSummaryAttendantItemComponent } from './components/event-summary-attendant-item/event-summary-attendant-item.component';
import { EventSummaryAttendantResourceComponent } from './components/event-summary-attendant-resource/event-summary-attendant-resource.component';
import { EventSummaryAttendantOrganizerDetailsComponent } from './components/event-summary-attendant-organizer-details/event-summary-attendant-organizer-details.component';
import { EventSummaryAttendantDetailsComponent } from './components/event-summary-attendant-details/event-summary-attendant-details.component';
import { EventSummaryAttendantSectionComponent } from './components/event-summary-attendant-section/event-summary-attendant-section.component';
import { SummaryContainerComponent } from './containers/summary-container/summary-container.component';
import { InquiryDialogComponent } from '../shared/components/inquiry-dialog/inquiry-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EventSummaryGeneralDetailsComponent, 
    EventSummaryComponent, 
    EventSummaryAttendantRundownComponent, 
    EventSummaryResourcesComponent,
    EventSummaryResourceItemComponent,
    EventSummaryDetailsComponent,
    EventSummaryAttendantsComponent,
    EventSummaryAttendantItemComponent,
    EventSummaryAttendantResourceComponent,
    EventSummaryAttendantOrganizerDetailsComponent,
    EventSummaryAttendantDetailsComponent,
    EventSummaryAttendantSectionComponent,
    SummaryContainerComponent
  ],
  imports: [
    CommonModule,
    EventSummaryRoutingModule,    
    MaterialModule,
    SharedModule
  ],
})
export class EventSummaryModule { }
