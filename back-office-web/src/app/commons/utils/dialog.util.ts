import {MatDialogConfig} from '@angular/material/dialog';
import {IEntityRegisterDialog} from '../../../@mc4/shared/entity-register-dialog/entity-register-dialog.model';
import {MatBottomSheetConfig} from '@angular/material/bottom-sheet';

export const leftDialogWidth = '400px';

export const buildEntityRegisterDialog = (data: IEntityRegisterDialog): MatDialogConfig<IEntityRegisterDialog> => ({
  width: leftDialogWidth,
  height: '100%',
  autoFocus: false,
  disableClose: true,
  position: {right: '0'},
  data
});

//borrar pronto
export const buildPageFormDialog = (data: any): MatDialogConfig<any> => ({
  width: 'auto',
  height: '100%',
  //autoFocus: false,
  disableClose: true,
  //position: {right: '0'},
  data
});

export const buildRightDialogConfig = <T>(data: T): MatDialogConfig<T> => ({
  width: leftDialogWidth,
  height: '100%',
  autoFocus: false,
  disableClose: true,
  position: {right: '0'},
  data
});

export const buildBottomSheetConfig = <T>(data: T): MatBottomSheetConfig<T> => ({
  autoFocus: 'dialog',
  disableClose: true,
  closeOnNavigation: true,
  panelClass: 'bottom-shet-container-80',
  data
});

export const buildBottomSheetConfigCustom = <T>( data: T, config: any): MatBottomSheetConfig<T> => ({
  ...config,
  data
});
