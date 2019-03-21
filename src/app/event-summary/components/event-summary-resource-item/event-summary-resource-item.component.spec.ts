import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryResourceItemComponent } from './event-summary-resource-item.component';

describe('EventSummaryResourceItemComponent', () => {
  let component: EventSummaryResourceItemComponent;
  let fixture: ComponentFixture<EventSummaryResourceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryResourceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryResourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
