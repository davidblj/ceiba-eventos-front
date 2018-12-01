import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventSectionIconComponent } from './add-event-section-icon.component';

describe('AddEventSectionIconComponent', () => {
  let component: AddEventSectionIconComponent;
  let fixture: ComponentFixture<AddEventSectionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventSectionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventSectionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
