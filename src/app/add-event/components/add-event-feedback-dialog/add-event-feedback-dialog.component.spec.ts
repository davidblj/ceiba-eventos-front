import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventFeedbackDialogComponent } from './add-event-feedback-dialog.component';

describe('AddEventFeedbackDialogComponent', () => {
  let component: AddEventFeedbackDialogComponent;
  let fixture: ComponentFixture<AddEventFeedbackDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventFeedbackDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventFeedbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
