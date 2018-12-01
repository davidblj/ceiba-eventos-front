import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventNewResourceComponent } from './add-event-new-resource.component';

describe('AddEventNewResourceComponent', () => {
  let component: AddEventNewResourceComponent;
  let fixture: ComponentFixture<AddEventNewResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventNewResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventNewResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
