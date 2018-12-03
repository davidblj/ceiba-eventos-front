import { AbstractControl } from "@angular/forms";

export interface NumericInput {
    appearence: String,
    label: String,
    control: AbstractControl,
    placeholder?: String,
    icon: String,    
}