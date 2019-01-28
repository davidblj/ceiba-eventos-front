import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementAssignedResourceItemComponent } from './event-management-assigned-resource-item.component';

describe('EventManagementAssignedResourceItemComponent', () => {
  let component: EventManagementAssignedResourceItemComponent;
  let fixture: ComponentFixture<EventManagementAssignedResourceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementAssignedResourceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementAssignedResourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
