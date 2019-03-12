import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormArrayLengthValidator } from 'src/app/shared/validators/form-array-length.validator';
import { Attendant } from '../../shared/attendant.interface';
import { AttendantInputContainerComponent } from '../../containers/attendant-input-container/attendant-input-container.component';
import { ResourcePickerContainerComponent } from '../../containers/resource-picker-container/resource-picker-container.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Directionality } from '@angular/cdk/bidi';

@Component({

  selector: 'app-event-management-form',
  templateUrl: './event-management-form.component.html',
  styleUrls: ['./event-management-form.component.scss']
})
export class EventManagementFormComponent implements OnInit {

  @ViewChild(AttendantInputContainerComponent)
  attendantInputContainerComponent: AttendantInputContainerComponent;

  @ViewChild(ResourcePickerContainerComponent)
  resourcePickerContainerComponent: ResourcePickerContainerComponent;

  @Output()
  onAddNewAttendant = new EventEmitter<Attendant>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { 
    
    snackBar.open("Se guardó el participante", "", {
      duration: 200000, 
      horizontalPosition: 'center', 
      panelClass: "custom-snackbar"
    });  
  }

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

  handleFormSuccessfulSubmit() {

    // TODO: call the snackbar here
    this.resetForm();
  }

  resetForm() {

    // TODO: test
    this.resourcePickerContainerComponent.resetQuantitiesArray();
    this.attendantInputContainerComponent.resetInput();
    this.form.reset();
  }

  get assignedResourcesControl() {
    return this.form.controls['assigned_resources'] as FormArray;
  }

  get employeeIdControl() {
    return this.form.controls['employee_id'];
  }  
}
