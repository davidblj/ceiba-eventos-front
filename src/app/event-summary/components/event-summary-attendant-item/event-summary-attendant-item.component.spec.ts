import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryAttendantItemComponent } from './event-summary-attendant-item.component';

describe('EventSummaryAttendantItemComponent', () => {
  let component: EventSummaryAttendantItemComponent;
  let fixture: ComponentFixture<EventSummaryAttendantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryAttendantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryAttendantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
