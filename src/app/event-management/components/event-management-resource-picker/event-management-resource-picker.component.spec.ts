import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementResourcePickerComponent } from './event-management-resource-picker.component';

describe('EventManagementResourcePickerComponent', () => {
  let component: EventManagementResourcePickerComponent;
  let fixture: ComponentFixture<EventManagementResourcePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementResourcePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementResourcePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
