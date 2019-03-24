import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryAttendantResourceComponent } from './event-summary-attendant-resource.component';

describe('EventSummaryAttendantResourceComponent', () => {
  let component: EventSummaryAttendantResourceComponent;
  let fixture: ComponentFixture<EventSummaryAttendantResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryAttendantResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryAttendantResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
