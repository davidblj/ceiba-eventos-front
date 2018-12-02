import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfig } from './form-config'

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit {

  formConfig: FormConfig;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
    this.form = this.fb.group({
      name: [ '', [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(24)
      ]],
      description: [ '', [
        Validators.minLength(10),
        Validators.maxLength(150)
      ]]
    });

    this.instantiateFormConfiguration();
  }

  instantiateFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }
}
