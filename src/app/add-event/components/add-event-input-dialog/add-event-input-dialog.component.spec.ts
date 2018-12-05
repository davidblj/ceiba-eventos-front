import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventInputDialogComponent } from './add-event-input-dialog.component';

describe('AddEventInputDialogComponent', () => {
  let component: AddEventInputDialogComponent;
  let fixture: ComponentFixture<AddEventInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
