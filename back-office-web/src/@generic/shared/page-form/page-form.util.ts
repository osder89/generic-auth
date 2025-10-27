import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {SelectSearchFn, ValidatorItem, fila} from './page-form.model';
import { FieldItem } from 'src/@mc4/shared/entity-register-dialog/entity-register-dialog.model';

export const requiredValidatorItem = (message: string = 'Campo requerido.'): ValidatorItem => ({
  type: 'required',
  message,
  validator: Validators.required
});

export const minLengthValidatorItem = (minLength: number) => ({
  type: 'minlength',
  message: `Se requiere al menos ${minLength} caracteres.`,
  validator: Validators.minLength(minLength)
});
export const maxLengthValidatorItem = (maxLength: number) => ({
  type: 'minlength',
  message: `${maxLength} es el máximo valor de caracteres.`,
  validator: Validators.maxLength(maxLength)
});

export const emailValidatorItem = (message: string = 'Formato de correo inválido.'): ValidatorItem => ({
  type: 'email',
  message,
  validator: Validators.email
});

export const minNumberValidatorItem = (minNumber: number) => ({
  type: 'min',
  message: `${minNumber} es el valor mínimo permitido.`,
  validator: Validators.min(minNumber)
});

export const maxNumberValidatorItem = (maxNumber: number) => ({
  type: 'max',
  message: `${maxNumber} es el valor máximo permitido.`,
  validator: Validators.max(maxNumber)
});

export const patternValidatorItem = (pattern: string, message: string) => ({
  type: 'pattern',
  message: `Formato inválido, ${message}`,
  validator: Validators.pattern(pattern)
});

export const ageValidatorItem = (message: string = 'Fecha de Nacimiento no Válida'): ValidatorItem => ({
  type: 'age',
  message: message,
  validator: ageValidator()
});

export const atLeastOneFieldRequiredValidator= (control1 : string, control2:string): ValidatorFn => {
  return (FormGroup: FormGroup): ValidationErrors | null => {
    const primerControl = FormGroup.get(control1);
    const segundoControl = FormGroup.get(control2);

    const primerValue = primerControl.value;
    const segundodValue = segundoControl.value;

    if (!primerValue && !segundodValue) {
      return { requiredFields: true };
    } else {
      return null;
    }
  };
}

function ageValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const birthdate = new Date(control.value);
    const today = new Date();


    // Validación: la fecha de nacimiento no debe ser mayor a la fecha de hoy
    if (birthdate > today) {
      console.log("Antes de tiempo Validando:", birthdate, " vs ", today);
      return { age: true };
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    // Si el mes y el día aún no han llegado este año, restamos un año
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (age > 120) {
      console.log(" Mayor Validando:", monthDiff, " vs ", dayDiff);
      return { age: true };
    }

    return null;
  };
}

