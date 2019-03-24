import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryAttendantsComponent } from './event-summary-attendants.component';

describe('EventSummaryAttendantsComponent', () => {
  let component: EventSummaryAttendantsComponent;
  let fixture: ComponentFixture<EventSummaryAttendantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryAttendantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryAttendantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
