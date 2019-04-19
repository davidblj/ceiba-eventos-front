import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCategoriesItemComponent } from './event-categories-item.component';

describe('EventCategoriesItemComponent', () => {
  let component: EventCategoriesItemComponent;
  let fixture: ComponentFixture<EventCategoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCategoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
