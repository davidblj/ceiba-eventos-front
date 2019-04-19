import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCategoriesNavigationComponent } from './event-categories-navigation.component';

describe('EventCategoriesNavigationComponent', () => {
  let component: EventCategoriesNavigationComponent;
  let fixture: ComponentFixture<EventCategoriesNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCategoriesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCategoriesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
