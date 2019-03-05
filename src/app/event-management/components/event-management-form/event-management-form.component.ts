import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
      attendant: [''],
      attendantResources: this.fb.array([])
    });    
  }

  onSubmitHandler() {

    console.log(this.form.value);
  }

  get attendantResourcesControl() {
    return this.form.controls['attendantResources'] as FormArray;
  }
}
