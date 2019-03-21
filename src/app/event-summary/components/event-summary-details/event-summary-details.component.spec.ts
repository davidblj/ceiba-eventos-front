import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryDetailsComponent } from './event-summary-details.component';

describe('EventSummaryDetailsComponent', () => {
  let component: EventSummaryDetailsComponent;
  let fixture: ComponentFixture<EventSummaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
