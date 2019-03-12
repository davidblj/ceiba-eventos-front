import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormArrayLengthValidator } from 'src/app/shared/validators/form-array-length.validator';
import { Attendant } from '../../shared/attendant.interface';
import { AttendantInputContainerComponent } from '../../containers/attendant-input-container/attendant-input-container.component';

@Component({

  selector: 'app-event-management-form',
  templateUrl: './event-management-form.component.html',
  styleUrls: ['./event-management-form.component.scss']
})
export class EventManagementFormComponent implements OnInit {

  @ViewChild(AttendantInputContainerComponent)
  attendantInputContainerComponent: AttendantInputContainerComponent;

  @Output()
  onAddNewAttendant = new EventEmitter<Attendant>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      employee_id: [null, [Validators.required]],
      assigned_resources: this.fb.array([], FormArrayLengthValidator())  
    });
  }

  onSubmitHandler() {    
    const attendant = this.form.value;
    this.onAddNewAttendant.emit(attendant);
  }

  resetForm() {

    // reset quantity object

    // reset text input
    this.attendantInputContainerComponent.resetInput()    ;

    // reset this form builder
    this.form.reset();
  }

  get assignedResourcesControl() {
    return this.form.controls['assigned_resources'] as FormArray;
  }

  get employeeIdControl() {
    return this.form.controls['employee_id'];
  }  
}
