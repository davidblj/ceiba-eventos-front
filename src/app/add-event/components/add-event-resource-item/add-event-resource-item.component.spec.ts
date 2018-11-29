import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventResourceItemComponent } from './add-event-resource-item.component';

describe('AddEventResourceItemComponent', () => {
  let component: AddEventResourceItemComponent;
  let fixture: ComponentFixture<AddEventResourceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventResourceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventResourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
