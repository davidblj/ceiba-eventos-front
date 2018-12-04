import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventNewItemSectionComponent } from './add-event-new-item-section.component';

describe('AddEventNewItemSectionComponent', () => {
  let component: AddEventNewItemSectionComponent;
  let fixture: ComponentFixture<AddEventNewItemSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventNewItemSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventNewItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
