import { AbstractControl } from "@angular/forms";

export enum InputType {
    text = 1,
    password
}

export interface FormInput {
    placeholder: String;
    control: AbstractControl;
    icon: String;    
    type: InputType;   
}
