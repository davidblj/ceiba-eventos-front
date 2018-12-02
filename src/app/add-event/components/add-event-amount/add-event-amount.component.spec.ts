import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventAmountComponent } from './add-event-amount.component';

describe('AddEventAmountComponent', () => {
  let component: AddEventAmountComponent;
  let fixture: ComponentFixture<AddEventAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
