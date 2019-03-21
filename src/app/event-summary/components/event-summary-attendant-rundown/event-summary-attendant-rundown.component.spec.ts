import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryAttendantRundownComponent } from './event-summary-attendant-rundown.component';

describe('EventSummaryAttendantRundownComponent', () => {
  let component: EventSummaryAttendantRundownComponent;
  let fixture: ComponentFixture<EventSummaryAttendantRundownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryAttendantRundownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryAttendantRundownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
