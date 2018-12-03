import { AbstractControl } from "@angular/forms";

export interface TextInput {
    appearence: String,
    label: String,
    control: AbstractControl,
    placeholder?: String,
    icon: String,
    minLength: number,
    maxLength: number,
    optional: boolean
}