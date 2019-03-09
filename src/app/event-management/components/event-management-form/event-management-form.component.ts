import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormArrayLengthValidator } from 'src/app/shared/validators/form-array-length.validator';
@Component({

  selector: 'app-event-management-form',
  templateUrl: './event-management-form.component.html',
  styleUrls: ['./event-management-form.component.scss']
})
export class EventManagementFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      attendant: ['', [
        Validators.required
      ]],
      attendantResources: this.fb.array([], FormArrayLengthValidator())  
    });
  }

  onSubmitHandler() {
    console.log(this.form.value);
  }

  get attendantResourcesControl() {
    return this.form.controls['attendantResources'] as FormArray;
  }

  get attendantControl() {
    return this.form.controls['attendant'];
  }
}
