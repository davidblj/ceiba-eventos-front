import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventResourcesComponent } from './add-event-resources.component';

describe('AddEventResourcesComponent', () => {
  let component: AddEventResourcesComponent;
  let fixture: ComponentFixture<AddEventResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
