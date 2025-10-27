import {Validators} from '@angular/forms';
import {ValidatorItem} from './entity-register-dialog.model';

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



