import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTextInputComponent } from './default-text-input.component';

describe('DefaultTextInputComponent', () => {
  let component: DefaultTextInputComponent;
  let fixture: ComponentFixture<DefaultTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
