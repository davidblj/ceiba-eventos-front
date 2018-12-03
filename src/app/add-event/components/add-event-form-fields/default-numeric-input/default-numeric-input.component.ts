import { Component, OnInit, Input } from '@angular/core';
import { TextInput } from '../../../shared/text-input.interface'

@Component({
  selector: 'app-default-numeric-input',
  templateUrl: './default-numeric-input.component.html',
  styleUrls: ['./default-numeric-input.component.scss']
})
export class DefaultNumericInputComponent implements OnInit {

  @Input()
  textInput: TextInput;

  constructor() { }

  ngOnInit() {   
  }  

  get value() {    
    return this.textInput.control.value;
  }

  get control() {
    return this.textInput.control;
  }

  get isInvalid() {
    return this.textInput.control.invalid;
  }

  get formattedValue() {

    return isNaN(this.value) ? 0 : this.value;
  }

  get errorMessage() {
          
    if (this.control.hasError('not-numeric')) {
      return 'es numérico'
    }

    if (this.control.hasError('required')) {
      return 'requerido'
    }

    return '';
  }
}
