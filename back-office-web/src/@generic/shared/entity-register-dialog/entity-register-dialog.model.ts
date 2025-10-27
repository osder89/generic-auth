import {Observable} from 'rxjs';
import {FormGroup, ValidatorFn} from '@angular/forms';
import {SelectSearchFn} from "./select-search.fn";

export type EntityRegisterServiceFn = (body: any) => Observable<any>;
export type EntityUpdateServiceFn = (id: number, body: any) => Observable<any>;
// export type DialogFieldValueChangeFn = (value: any, form: FormGroup, options?: any) => void;
export type DialogFieldValueChangeFn = (value: any, form: FormGroup, options?: any, fieldList?: FieldItem[]) => void;
export type FieldType = 'NUMBER_INPUT' | 'TEXT_INPUT' | 'DATE' | 'RANGE_DATE' | 'SELECT' | 'SLIDER' | 'TEXT_AREA' | 'HIDDEN' | 'TEXT_PASSWORD' | 'FILE_INPUT' | 'TIME' | 'DATE_TIME' | 'RADIO' | 'SELECT-MULTIPLE' | 'LABEL' | 'RELATION_MULTIPLE';
export type ActionType = 'UPDATE' | 'REGISTER';
export type FileResultTypet = 'BASE64' | 'BYTES';

export interface IEntityRegisterDialog {
  title: string;
  subtitle?: string;
  btnOk: string;
  fieldList: FieldItem[];
  actionType: ActionType;
  registerFn?: EntityRegisterServiceFn;
  updateFn?: EntityUpdateServiceFn;
  entityId?: number;
}

export interface FieldItem {
  type: FieldType;
  name: string;
  label: string;
  default?: any;
  maxSize?: number;
  maxlength?: number;
  validators: ValidatorItem[];
  selectOptions?: ISelectOptions;
  options?: any;
  disabled?: boolean;
  valueChangeFn?: DialogFieldValueChangeFn;
  typeInp?: string;
  fileResult?: FileResultTypet;
  multiple?: boolean;
  hidden?: boolean;
  id?: string;
  accept?: string;
}

export interface ValidatorItem {
  type: string;
  message: string;
  validator: ValidatorFn;
}

export interface ISelectOptions {
  dataList: any[];
  propValue: string;
  propShow: string;
  propMostrar?: string;
  dataListTmp?: any[];
  selectSearch?: SelectSearchFn;
}
