import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementLocationFormComponent } from './event-management-location-form.component';

describe('EventManagementFormComponent', () => {
  let component: EventManagementLocationFormComponent;
  let fixture: ComponentFixture<EventManagementLocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementLocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
