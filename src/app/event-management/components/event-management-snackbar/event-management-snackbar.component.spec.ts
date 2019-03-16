import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementSnackbarComponent } from './event-management-snackbar.component';

describe('EventManagementSnackbarComponent', () => {
  let component: EventManagementSnackbarComponent;
  let fixture: ComponentFixture<EventManagementSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
