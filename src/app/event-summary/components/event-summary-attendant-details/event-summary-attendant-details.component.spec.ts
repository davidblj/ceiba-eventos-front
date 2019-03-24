import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryAttendantDetailsComponent } from './event-summary-attendant-details.component';

describe('EventSummaryAttendantDetailsComponent', () => {
  let component: EventSummaryAttendantDetailsComponent;
  let fixture: ComponentFixture<EventSummaryAttendantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryAttendantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryAttendantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
