import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {fadeInUpAnimation} from '../../animations/fade-in-up.animation';
import {fadeInRightAnimation} from '../../animations/fade-in-right.animation';
import {EntityRegisterServiceFn, FieldItem, IEntityRegisterDialog} from './entity-register-dialog.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Loading} from 'notiflix';
import {FileHandle} from '../../pipes/drag-area.directive';
import {fileUtil} from '../../../app/commons/utils/file.util';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {throwError} from "rxjs";


@Component({
  selector: 'mc4-entity-register-dialog',
  templateUrl: './entity-register-dialog.component.html',
  styleUrls: ['./entity-register-dialog.component.scss'],
  animations: [fadeInUpAnimation, fadeInRightAnimation]
})
export class EntityRegisterDialogComponent implements OnInit {
  form: FormGroup;
  fieldList: FieldItem[];
  registerFn: EntityRegisterServiceFn;

  files: FileHandle[] = [];
  fileConfig = {};
  constructor(public dialogRef: MatDialogRef<EntityRegisterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IEntityRegisterDialog,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.fieldList = this.data.fieldList;
    this.registerFn = this.data.registerFn;
    this.buildFormGroup();
  }

  submitForm() {
    if (this.form.valid) {
      Loading.pulse();
      if (this.data.actionType === 'REGISTER') {
        if (this.data.registerFn) {
          this.data.registerFn(this.form.value)
            .subscribe({next: this.successRegisterOrUpdateFn});
        } else {
          this.successRegisterOrUpdateFn(this.form.value);
        }
      } else if (this.data.actionType === 'UPDATE') {
        if (this.data.updateFn) {
          this.data.updateFn(this.data.entityId, this.form.value)
            .subscribe({next: this.successRegisterOrUpdateFn});
        } else {
          this.successRegisterOrUpdateFn(this.form.value);
        }
      }
    } else {
      for (const key in this.form.controls) {
        if (!this.form.controls[key].valid) {
          this.form.controls[key].markAsTouched();
        }
      }
    }
  }

  protected successRegisterOrUpdateFn = (body: any) => {
    Loading.remove(300);
    this.dialogRef.close(body ? body : true);
  }

  protected buildFormGroup() {
    this.form = new FormGroup({});
    for (const item of this.fieldList) {
      if (!item.validators) item.validators = [];
      const validatorList = item.validators.map(vItem => vItem.validator);
      this.form.addControl(item.name, new FormControl({value: item.default, disabled: item.disabled}, validatorList));
      if (item.valueChangeFn && item.type !== 'SELECT') {
        this.form.controls[item.name]
          .valueChanges
          .subscribe((value) => item.valueChangeFn(value, this.form, this.fileConfig));
      }
      if (item.valueChangeFn && item.type === 'SELECT') {
        if (item.options) {
          if(item.options.actualizarA) {
            if(item.options.actualizarA.length==1) {
              const actualizarA = this.fieldList.find(it => it.name === item.options.actualizarA[0]);
              if (typeof (actualizarA) != 'undefined') {
                if (actualizarA.type === 'SELECT') {
                  this.form.controls[item.name]
                    .valueChanges
                    .subscribe((value) =>{
                      return item.valueChangeFn(value, this.form, {
                        controlActualizar: actualizarA,
                      propMostrar: actualizarA.selectOptions.propMostrar,
                      dataList: actualizarA.selectOptions.dataList,
                      formContenedor: item.options.actualizarA
                    }, this.fieldList)});
                } else {
                  this.form.controls[item.name]
                    .valueChanges
                    .subscribe((value) => item.valueChangeFn(value, this.form, {
                      controlActualizar: actualizarA,
                      filesConfig: this.fileConfig
                    }));
                }
              }
            }else{
              const actualizarA =[];
              item.options.actualizarA.forEach(cont=>
                actualizarA.push(this.fieldList.find(it => it.name === cont))
              );
              this.form.controls[item.name]
                .valueChanges
                .subscribe((value) => item.valueChangeFn(value, this.form, {
                  controlActualizar: actualizarA,
                  filesConfig: this.fileConfig
                }));
            }
          }
        }else{
          this.form.controls[item.name]
            .valueChanges
            .subscribe((value) => item.valueChangeFn(value, this.form, this.fileConfig, this.fieldList));
        }
      }
      if (item.type === 'FILE_INPUT') {
        this.fileConfig[item.name] = [];

        if (item.default) {
          this.loadDefaultImage(item);
        }
      }
    }
    console.log(this.fieldList);
  }

  togglePassword(field: FieldItem) {
    if (field.typeInp === 'password') {
      field.typeInp = 'text';
    } else if (field.typeInp === 'text') {
      field.typeInp = 'password';
    }
  }

  async filesDropped(files: FileHandle[], field: FieldItem) {
    const controlName = field.name;
    this.fileConfig[controlName] = files;
    if (field.fileResult === 'BYTES') {
      const bytes = await fileUtil.fileToByteArray(files[0].file);
      this.form.get(controlName).setValue(bytes);
    }
    if (field.fileResult === 'BASE64') {
      const base64 = await fileUtil.fileToBase64(files[0].file);
      this.form.get(controlName).setValue(base64);
    }
  }

  async loadFiles(event: any, field: FieldItem) {
    const files: FileHandle[] = [];
    for (const file of event.target.files) {
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({ file, url});
    }

    if (field.maxSize && files[0].file.size > field.maxSize){
      console.log("El documento es mas grande");
      throwError("El tamaño del documento no es admitido");
    }

    if (files.length > 0) {
      await this.filesDropped(files, field);
    }
  }

  loadDefaultImage(field: FieldItem) {
    console.log('cargando imagen por defecto...');
    const defaultBlob: Blob = fileUtil.dataURItoBlob(field.default);
    const defaultFile: File = fileUtil.blobToFile(defaultBlob, 'icon.png');
    const defaultValue: FileHandle[] = [{
      file: defaultFile,
      url: field.default
    }];

    this.filesDropped(defaultValue, field);
  }

  isImage(file: FileHandle) {
    return file.file.type && file.file.type.indexOf('image') >= 0;
  }

  fieldFileLabel(field: FieldItem) {
    let reqStr = '';
    const isRequired = this.form.controls[field.name].hasValidator(Validators.required);
    if (isRequired) {
      reqStr = ' *';
    }
    return field.label + reqStr;
  }

  selectOpened(focusName: string) {
    if(focusName){
      const searchInp = document.getElementById(focusName);
      searchInp.focus();
    }

  }
}
