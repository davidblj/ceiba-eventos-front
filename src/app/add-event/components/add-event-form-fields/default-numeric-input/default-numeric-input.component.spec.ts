import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNumericInputComponent } from './default-numeric-input.component';

describe('DefaultNumericInputComponent', () => {
  let component: DefaultNumericInputComponent;
  let fixture: ComponentFixture<DefaultNumericInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultNumericInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNumericInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
