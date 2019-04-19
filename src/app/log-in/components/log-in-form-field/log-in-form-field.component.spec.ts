import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInFormFieldComponent } from './log-in-form-field.component';

describe('LogInFormFieldComponent', () => {
  let component: LogInFormFieldComponent;
  let fixture: ComponentFixture<LogInFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
