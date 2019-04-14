import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInPresentationComponent } from './log-in-presentation.component';

describe('LogInPresentationComponent', () => {
  let component: LogInPresentationComponent;
  let fixture: ComponentFixture<LogInPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
