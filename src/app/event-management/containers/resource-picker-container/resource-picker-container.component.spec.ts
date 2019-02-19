import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePickerContainerComponent } from './resource-picker-container.component';

describe('ResourcePickerContainerComponent', () => {
  let component: ResourcePickerContainerComponent;
  let fixture: ComponentFixture<ResourcePickerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcePickerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePickerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
