import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormArrayLengthValidator } from 'src/app/shared/validators/form-array-length.validator';
import { Attendant } from '../../shared/attendant.interface';
import { AttendantInputContainerComponent } from '../../containers/attendant-input-container/attendant-input-container.component';
import { ResourcePickerContainerComponent } from '../../containers/resource-picker-container/resource-picker-container.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Directionality } from '@angular/cdk/bidi';
import { EventManagementSnackbarComponent } from '../event-management-snackbar/event-management-snackbar.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalData, Status } from 'src/app/shared/interfaces/modal-data.interface';
import { FeedbackDialogComponent } from 'src/app/shared/components/feedback-dialog/feedback-dialog.component';

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

  constructor(private fb: FormBuilder, public dialogService: MatDialog, 
              private snackBar: MatSnackBar) {
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

  handleSuccessfulFormSubmit() {

    this.openSnackBar();
    this.resetUiState();
  }

  handleUnsuccessfulFormSubmit() {

    this.dialogService.open(FeedbackDialogComponent, {
      width: '80vw',
      panelClass: 'dialog',
      data: this.buildFailedModalData()
    });
  }  

  buildFailedModalData(): ModalData {

    return {
      status: Status.fail,
      message: "Oops! algo ocurrio mal, intentalo de nuevo.",
      iconSource: "assets/icons/sad.svg",
    };
  }

  resetUiState() {

    this.resourcePickerContainerComponent.resetQuantitiesArray();
    this.attendantInputContainerComponent.resetInput();    
    this.resetFormState();
  }

  resetFormState() {

    this.form.reset();        
    const formArray = this.form.controls['assigned_resources'] as FormArray;
    
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    } 
  }

  openSnackBar() {

    this.snackBar.openFromComponent(EventManagementSnackbarComponent, {      
      duration: 2000, 
      horizontalPosition: 'center', 
      verticalPosition: 'top',
      panelClass: 'custom-snackbar-container--position-top'
    });  
  }

  get assignedResourcesControl() {
    return this.form.controls['assigned_resources'] as FormArray;
  }

  get employeeIdControl() {
    return this.form.controls['employee_id'];
  }  
}
