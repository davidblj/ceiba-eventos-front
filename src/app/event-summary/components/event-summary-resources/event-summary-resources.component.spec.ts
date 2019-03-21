import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryResourcesComponent } from './event-summary-resources.component';

describe('EventSummaryResourcesComponent', () => {
  let component: EventSummaryResourcesComponent;
  let fixture: ComponentFixture<EventSummaryResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
