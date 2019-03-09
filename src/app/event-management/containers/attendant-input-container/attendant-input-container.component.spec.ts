import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantInputContainerComponent } from './attendant-input-container.component';

describe('AttendantInputContainerComponent', () => {
  let component: AttendantInputContainerComponent;
  let fixture: ComponentFixture<AttendantInputContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendantInputContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
