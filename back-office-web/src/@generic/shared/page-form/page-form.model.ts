import {AsyncValidatorFn, FormGroup, ValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs';
import { Icrumb } from 'src/@mc4/shared/breadcrumbs/breadcrumbs.model';

export type FieldType = 'NUMBER_INPUT' | 'TEXT_INPUT' | 'DATE' | 'RANGE_DATE' | 'SELECT' |'SELECT-MULTIPLE' | 'SLIDER' | 'TEXT_AREA' | 'HIDDEN' | 'TEXT_PASSWORD' | 'FILE_INPUT' | 'TIME' | 'DATE_TIME' | 'RADIO';
export type ActionType = 'UPDATE' | 'REGISTER';
export type SelectSearchFn = (value: any, field: FieldItem) => void;
export type FieldValueChangeFn = (value: any, form: FormGroup, options?: any) => void;
export type FileResultTypet = 'BASE64' | 'BYTES';
export type EntityRegisterServiceFn = (body: any) => Observable<any>;
export type EntityUpdateServiceFn = (id: number, body: any) => Observable<any>;




export interface FieldItem {
  type: FieldType;
  name: string;
  label: string;
  default?: any;
  maxlength?: number;
  validators: ValidatorItem[];
  asyncValidator?: AsyncValidatorItem;
  selectOptions?: ISelectOptions;
  options?: any;
  flex?: number;
  disabled?: boolean;
  valueChangeFn?: FieldValueChangeFn;
  typeInp?: string;
  fileResult?: FileResultTypet;
  multiple?: boolean;
  hidden?: boolean;
  id?: string;
  withoutSpaces?: boolean;
}

export interface FieldSelectMultipleSearchItem {
  type: FieldType;
  name: string;
  label: string;
  default?: any;
  validators: ValidatorItem[];
  selectOptions: ISelectOptions;
  options?: any;
  flex?: number;
  disabled?: boolean;
  valueChangeFn?: FieldValueChangeFn;
  multiple?: boolean;
  hidden?: boolean;
  id?: string;
}

export interface fila  {
  label?: string;
  controls:FieldItem [];
}

export interface IEntityPageForm {
  current: string;
  crumbs: Icrumb[];
  filas: fila[];
  validators?: ValidatorFn[];
  actionType: ActionType;
  registerFn?: EntityRegisterServiceFn;
  updateFn?: EntityUpdateServiceFn;
  buttonSubmitText: string;
  entityId?:number;
}

export interface ValidatorItem {
  type: string;
  message: string;
  validator: ValidatorFn;
}

export interface AsyncValidatorItem {
  type: string;
  message: string;
  validator: AsyncValidatorFn;
}

export interface ISelectOptions {
  dataList: any[];
  propValue: string;
  propShow: string;
  propMostrar?: string;
  dataListTmp?: any[];
  selectSearch?: SelectSearchFn;
}
