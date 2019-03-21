import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryGeneralDetailsComponent } from './event-summary-general-details.component';

describe('EventSummaryGeneralDetailsComponent', () => {
  let component: EventSummaryGeneralDetailsComponent;
  let fixture: ComponentFixture<EventSummaryGeneralDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryGeneralDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryGeneralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
