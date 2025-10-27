import {Observable} from 'rxjs';
import {ThemePalette} from '@angular/material/core';
import {Paginator} from '../../../app/commons/utils/paginator';
import {HttpParams} from '@angular/common/http';
import {DatePipe} from "@angular/common";

export type TableEventType = 'ROW_CLICK' | 'RELOAD_PAGE' | 'RESET' | 'NOOP' | 'RELOAD_ACTIONS' | 'DATA_IS_LOADED' | 'START_COUNTER_TO_RELOAD' | 'STOP_COUNTER_TO_RELOAD';

export type RequestGroupedDataFn = <T>() => Observable<T[]>;

export type IsGroupItemVerifyFn = <T>(index, item: T) => boolean;

export type RowCheckVerifyFn = (row: any) => boolean;

export type RowCheckDisableVerifyFn = (row: any) => boolean;

export type CellCheckLoadingCellFn = (row: any) => boolean;

export type TextContainerCellStyle = (row: any) => {[key: string]: string};

export type CellTypeContainerStyle = (row: any) => { [key: string]: string };

export type CellTypeStyle = (row: any) => { [key: string]: string };

export type ItemFormatterFn = (content: any[]) => any[];

export type CellMapperFn = (cellValue: any) => any;

export type RowDisabledFn = (row: any) => boolean;

export type PaginatedFn = (queryParams: {[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>}) => Observable<Paginator<any>>;

export const defaultItemFormatter: ItemFormatterFn = (content: any[]) => content;

export const actionTableColumItem: ITableColumn = {name: 'Actions', property: 'actions', visible: true, isModelProperty: false };

export const checkRowTableColumItem: ITableColumn = { name: 'Check', property: 'checkbox', visible: true, isModelProperty: false };

export const noopTableEvent = (): ITableEvents => ({ event: 'NOOP' });

export type CellTypeFn = 'IMAGE' | 'TEXT' | 'LARGE_TEXT' | 'ICON'  | 'BUTTON';

export const lastActionTableColumItem: ITableColumn = {
  name: 'Last Actions',
  property: 'lastActions',
  visible: true,
  isModelProperty: false,
};

export interface ITableEvents {
  event: TableEventType;
  data?: any;
}

export interface ITableColumn {
  name: string;
  property: string;
  isSort?: boolean;
  sortProperty?: string;
  visible: boolean;
  isModelProperty: boolean;
  width?: string; // util para tablas sobre Dialog o BottomSheet
  largeText?: ILargeTextCell;
  isPhone?: boolean;
  isEmail?: boolean;
  showLoadinCell?: CellCheckLoadingCellFn;
  textContainerCellStyle?: TextContainerCellStyle;
  cellTypeContainerStyle?: CellTypeContainerStyle;
  cellTypeStyle?: CellTypeStyle;
  cellType?: CellTypeFn;
  cellTypeFn?: (row: any) => CellTypeFn;
  iconName?: string;
  iconNameFn?: (row: any) => string;
  imageConfig?: ITableImageConfigCell;
  actionCode?: string;
  actionCodeFn?: (row: any) => string;
  textAlign?: string;
  tooltipText?: string;
  disabled?: (row: any) => boolean;
  inputPlaceholder?: string;
  inputType?: 'text' | 'number';
  tooltip?: string;
  tooltipFn?: (row: any) => string;
  textareaRows?: number;
  inputOnChange?: (value: string, row: any) => void;
  inputOnBlur?: (value: string, row: any) => void;
  buttonText?: string;
  buttonTextFn?: (row: any) => string;
  buttonOnClick?: (row: any) => void;
  selectOptions?: ISelectOptions;
  selectOptionsFn?: (row: any) => ISelectOptions;
  selectPlaceholder?: string;
  selectOnChange?: (value: string, row: any) => void;
  min?: Date;
  readonly?: boolean;
  maxlength?: number;
  extraButton?: IExtraButton;
  textPipe?: CellMapperFn; // Propiedad del segundo objeto
}

export interface IExtraButton {
  onClick?: (row: any) => void;
  disabled?: (row: any) => boolean;
  icon?: string;
  tooltip?: string;
  width?: string;
}

export interface ISelectOptions {
  dataList: any[];
  propValue?: string;
  propShow?: string;
}

export interface ILargeTextCell {
  text: string;
  actionCode: string;
  icon?: string;
}

export interface ITableRowAction {
  action: string;
  icon: string;
  actionCode: string;
  tooltip?: string;
  isDisabledFn?: RowDisabledFn;
}

export interface ITableRowCheckboxable {
  rowCheckedVerifyFn: RowCheckVerifyFn;
  rowCheckDisableVerifyFn: RowCheckDisableVerifyFn;
  checkActionCode: any;
  color: ThemePalette;
}

export interface ITableImageConfigCell {
  altMessage: string;
  width: string;
  height: string;
}

export class TableRequiredPropertyException extends DOMException {
  constructor(component: string, property: string, type: string) {
    super(`${component} -> ${property}: ${type} is required`);
  }
}
