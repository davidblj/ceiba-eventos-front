import { Component, OnInit, Input } from '@angular/core';
import { FormInput, InputType } from '../../shared/form-input.interface';

@Component({
  selector: 'app-log-in-form-field',
  templateUrl: './log-in-form-field.component.html',
  styleUrls: ['./log-in-form-field.component.scss']
})
export class LogInFormFieldComponent implements OnInit {

  @Input()
  formInput: FormInput;

  constructor() { }

  ngOnInit() {
  }

  get control() {
    return this.formInput.control;
  }

  get placeholder() {
    return this.formInput.placeholder;
  }

  get icon() {
    return this.formInput.icon;
  }

  get inputType() {
    return this.formInput.type === InputType.text ? 'text' : 'password';
  }
}
