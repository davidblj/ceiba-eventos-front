import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementAssignedResourcesComponent } from './event-management-assigned-resources.component';

describe('EventManagementAssignedResourcesComponent', () => {
  let component: EventManagementAssignedResourcesComponent;
  let fixture: ComponentFixture<EventManagementAssignedResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementAssignedResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementAssignedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
