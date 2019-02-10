import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementMenuComponent } from './event-management-menu.component';

describe('EventManagementMenuComponent', () => {
  let component: EventManagementMenuComponent;
  let fixture: ComponentFixture<EventManagementMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
