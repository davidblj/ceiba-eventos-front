import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementLocationListComponent } from './event-management-location-list.component';

describe('EventManagementLocationListComponent', () => {
  let component: EventManagementLocationListComponent;
  let fixture: ComponentFixture<EventManagementLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
