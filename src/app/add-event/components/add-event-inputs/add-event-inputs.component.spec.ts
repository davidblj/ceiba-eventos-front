import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventInputsComponent } from './add-event-inputs.component';

describe('AddEventInputsComponent', () => {
  let component: AddEventInputsComponent;
  let fixture: ComponentFixture<AddEventInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
