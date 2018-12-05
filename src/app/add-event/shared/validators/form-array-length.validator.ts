import {AbstractControl, ValidatorFn} from "@angular/forms";

export function FormArrayLengthValidator(): ValidatorFn {  

  return (control: AbstractControl): {[key: string]: any} | null => {
    
    const array = control.value;
    const dontComply = array.length > 0 ? false : true;
    return dontComply ? {'no-resource': {value: array}} : null;
  };
}