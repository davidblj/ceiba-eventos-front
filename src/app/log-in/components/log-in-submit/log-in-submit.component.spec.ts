import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInSubmitComponent } from './log-in-submit.component';

describe('LogInSubmitComponent', () => {
  let component: LogInSubmitComponent;
  let fixture: ComponentFixture<LogInSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
