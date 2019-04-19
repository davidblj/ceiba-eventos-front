import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCategoriesTabsComponent } from './event-categories-tabs.component';

describe('EventCategoriesTabsComponent', () => {
  let component: EventCategoriesTabsComponent;
  let fixture: ComponentFixture<EventCategoriesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCategoriesTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCategoriesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
