import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementLocationInputComponent } from './event-management-location-input.component';

describe('EventManagementLocationInputComponent', () => {
  let component: EventManagementLocationInputComponent;
  let fixture: ComponentFixture<EventManagementLocationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementLocationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementLocationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
