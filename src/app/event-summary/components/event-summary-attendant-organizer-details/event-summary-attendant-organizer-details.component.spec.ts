import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryAttendantOrganizerDetailsComponent } from './event-summary-attendant-organizer-details.component';

describe('EventSummaryAttendantOrganizerDetailsComponent', () => {
  let component: EventSummaryAttendantOrganizerDetailsComponent;
  let fixture: ComponentFixture<EventSummaryAttendantOrganizerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryAttendantOrganizerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryAttendantOrganizerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
