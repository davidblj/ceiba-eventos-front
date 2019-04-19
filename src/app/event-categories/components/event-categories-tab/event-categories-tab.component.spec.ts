import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCategoriesTabComponent } from './event-categories-tab.component';

describe('EventCategoriesTabComponent', () => {
  let component: EventCategoriesTabComponent;
  let fixture: ComponentFixture<EventCategoriesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCategoriesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCategoriesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
