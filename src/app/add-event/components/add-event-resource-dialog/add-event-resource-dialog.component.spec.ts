import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventResourceDialogComponent } from './add-event-resource-dialog.component';

describe('AddEventResourceDialogComponent', () => {
  let component: AddEventResourceDialogComponent;
  let fixture: ComponentFixture<AddEventResourceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventResourceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventResourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
