import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementAttendantInputComponent } from './event-management-attendant-input.component';

describe('EventManagementAttendantInputComponent', () => {
  let component: EventManagementAttendantInputComponent;
  let fixture: ComponentFixture<EventManagementAttendantInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementAttendantInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementAttendantInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
