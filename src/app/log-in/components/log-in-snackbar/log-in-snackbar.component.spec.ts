import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInSnackbarComponent } from './log-in-snackbar.component';

describe('LogInSnackbarComponent', () => {
  let component: LogInSnackbarComponent;
  let fixture: ComponentFixture<LogInSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
