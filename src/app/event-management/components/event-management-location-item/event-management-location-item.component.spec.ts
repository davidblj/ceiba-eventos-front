import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementLocationItemComponent } from './event-management-location-item.component';

describe('EventManagementLocationItemComponent', () => {
  let component: EventManagementLocationItemComponent;
  let fixture: ComponentFixture<EventManagementLocationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementLocationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementLocationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
