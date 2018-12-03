import { Component, OnInit, Input } from '@angular/core';
import { TextInput } from '../../../shared/text-input.interface'

@Component({
  selector: 'app-default-text-input',
  templateUrl: './default-text-input.component.html',
  styleUrls: ['./default-text-input.component.scss']
})
export class DefaultTextInputComponent implements OnInit {

  @Input()
  textInput: TextInput;
  flag =  false;

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

  get errorMessage() {
    return `entre los ${this.textInput.minLength} y los ${this.textInput.maxLength} carácteres`;
  }
}
