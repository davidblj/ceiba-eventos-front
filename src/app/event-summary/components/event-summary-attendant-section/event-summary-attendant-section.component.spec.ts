import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryAttendantSectionComponent } from './event-summary-attendant-section.component';

describe('EventSummaryAttendantSectionComponent', () => {
  let component: EventSummaryAttendantSectionComponent;
  let fixture: ComponentFixture<EventSummaryAttendantSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryAttendantSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryAttendantSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
