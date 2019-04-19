import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCategoriesListComponent } from './event-categories-list.component';

describe('EventCategoriesListComponent', () => {
  let component: EventCategoriesListComponent;
  let fixture: ComponentFixture<EventCategoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCategoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
