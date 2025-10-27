import {FormGroup} from "@angular/forms";

const buildNumberPattern = (cantEnteros: number, cantDecimales: number) => `^((?!0)\\d{1,${cantEnteros}}|0|\\.\\d{1,${cantDecimales}})($|\\.$|\\.\\d{1,${cantDecimales}}$)`;

let invalidFields:any[] = [];

export const FormUtil = {
  buildNumberPattern
};

export function validateForm(form:FormGroup) {
  Object.keys(form.controls).forEach((key) => {
    const control = form.get(key);
    if (control && control.invalid) {
      invalidFields.push({
        field: key,
        value: control.value,
        errors: control.errors
      });
    }
  });

  if (invalidFields.length > 0) {
    console.log('Invalid Fields:', invalidFields);
    return false;
  }

  console.log('Form is valid!');
  return true;
}
