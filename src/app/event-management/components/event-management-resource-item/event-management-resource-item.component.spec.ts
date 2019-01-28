import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementResourceItemComponent } from './event-management-resource-item.component';

describe('EventManagementResourceItemComponent', () => {
  let component: EventManagementResourceItemComponent;
  let fixture: ComponentFixture<EventManagementResourceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementResourceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementResourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
