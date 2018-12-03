import {AbstractControl, ValidatorFn} from "@angular/forms";

export function NumericValidator(): ValidatorFn {  

  return (control: AbstractControl): {[key: string]: any} | null => {

    const numericRegex = /^\d+$/;
    const value = control.value;
    
    const dontComply = !numericRegex.test(value) && value.length > 0;
    return dontComply ? {'not-numeric': {value: value}} : null;
  };
}