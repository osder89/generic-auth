import { Component, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { FieldItem, IEntityPageForm, fila } from "./page-form.model";
import { FileHandle } from "src/@mc4/pipes/drag-area.directive";
import { fileUtil } from "src/app/commons/utils/file.util";
import { DomSanitizer } from "@angular/platform-browser";
import { Icrumb } from "src/@mc4/shared/breadcrumbs/breadcrumbs.model";
import { Loading } from "notiflix";
import { PageFormService } from "./page-form.service";

@Component({
  selector: 'mc4-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})
export class PageFormComponent implements OnInit {
  formGroup: FormGroup;
  fieldList: fila[];
  current: string;
  crumbs: Icrumb[];
  @Input() data: IEntityPageForm;
  files: FileHandle[] = [];
  fileConfig = {};
  cancelar= false;
  constructor(private sanitizer: DomSanitizer, private pageFormService: PageFormService) {
    
  }

  ngOnInit(): void {
    this.fieldList = this.data.filas;
    this.current = this.data.current;
    this.crumbs = this.data.crumbs;
    this.buildFormGroup();
  }

  
  ngOnDestroy(): void {

    if(!this.cancelar){
      this.pageFormService.mostrarElemento.next(!this.pageFormService.mostrarElemento.value);

    }
 }


  submitForm() {
    if (this.formGroup.valid) {
      Loading.pulse();
      if (this.data.actionType === 'REGISTER') {
        if (this.data.registerFn) {
          this.data.registerFn(this.formGroup.value)
            .subscribe({ next: this.successRegisterOrUpdateFn });
        } else {
          this.successRegisterOrUpdateFn(this.formGroup.value);
        }
      }
      else if (this.data.actionType === 'UPDATE') {
        if (this.data.updateFn) {
          this.data.updateFn(this.data.entityId, this.formGroup.value)
            .subscribe({next: this.successRegisterOrUpdateFn});
        } else {
          this.successRegisterOrUpdateFn(this.formGroup.value);
        }
      }
    } else {
      for (const key in this.formGroup.controls) {
        if (!this.formGroup.controls[key].valid) {
          this.formGroup.controls[key].markAsTouched();
        }
      }
    }
  }

  protected successRegisterOrUpdateFn = (body: any) => {
    Loading.remove(300);
    this.cambiarVisibilidad(body, false);
  }

  cambiarVisibilidad(result: any, wasUpdate: boolean) {
    this.cancelar = true;
    this.pageFormService.mostrarElemento.next(!this.pageFormService.mostrarElemento.value);
    
  }

  protected buildFormGroup() {
    this.formGroup = new FormGroup({});

    for (const fila of this.fieldList) {
      for (const item of fila.controls) {
        if (!item.validators) item.validators = [];
        const validatorList = item.validators.map(vItem => vItem.validator);
        if(item.asyncValidator) {
        this.formGroup.addControl(item.name, new FormControl({ value: item.default, disabled: item.disabled }, validatorList, item.asyncValidator.validator));
        }
        else{
          this.formGroup.addControl(item.name, new FormControl({ value: item.default, disabled: item.disabled }, validatorList));
        }
        if (item.valueChangeFn && item.type !== 'SELECT') {
          this.formGroup.controls[item.name]
            .valueChanges
            .subscribe((value) => item.valueChangeFn(value, this.formGroup, this.fileConfig));
        }
        if (item.valueChangeFn && item.type === 'SELECT') {
          if (item.options) {
            if (item.options.actualizarA) {
              if (item.options.actualizarA.length == 1) {
                const actualizarA = fila.controls.find(it => it.name === item.options.actualizarA[0]);
                if (typeof (actualizarA) != 'undefined') {
                  if (actualizarA.type === 'SELECT') {
                    this.formGroup.controls[item.name]
                      .valueChanges
                      .subscribe((value) => item.valueChangeFn(value, this.formGroup, {
                        propMostrar: actualizarA.selectOptions.propMostrar,
                        dataList: actualizarA.selectOptions.dataList,
                        formContenedor: item.options.actualizarA
                      }));
                  } else {
                    this.formGroup.controls[item.name]
                      .valueChanges
                      .subscribe((value) => item.valueChangeFn(value, this.formGroup, {
                        controlActualizar: actualizarA,
                        filesConfig: this.fileConfig
                      }));
                  }
                }
              } else {
                const actualizarA = [];
                item.options.actualizarA.forEach(cont =>
                  actualizarA.push(fila.controls.find(it => it.name === cont))
                );
                this.formGroup.controls[item.name]
                  .valueChanges
                  .subscribe((value) => item.valueChangeFn(value, this.formGroup, {
                    controlActualizar: actualizarA,
                    filesConfig: this.fileConfig
                  }));
              }
            }
          } else {
            this.formGroup.controls[item.name]
              .valueChanges
              .subscribe((value) => item.valueChangeFn(value, this.formGroup, this.fileConfig));
          }
        }
        if (item.type === 'FILE_INPUT') {
          this.fileConfig[item.name] = [];
        }
      }
    }
    if (this.data.validators) {
      this.formGroup.setValidators(this.data.validators);

    }

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
      this.formGroup.get(controlName).setValue(bytes);
    }
    if (field.fileResult === 'BASE64') {
      const base64 = await fileUtil.fileToBase64(files[0].file);
      this.formGroup.get(controlName).setValue(base64);
    }
  }

  async loadFiles(event: any, field: FieldItem) {
    const files: FileHandle[] = [];
    for (const file of event.target.files) {
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({ file, url });
    }
    if (files.length > 0) {
      await this.filesDropped(files, field);
    }
  }

  isImage(file: FileHandle) {
    return file.file.type && file.file.type.indexOf('image') >= 0;
  }

  fieldFileLabel(field: FieldItem) {
    let reqStr = '';
    const isRequired = this.formGroup.controls[field.name].hasValidator(Validators.required);
    if (isRequired) {
      reqStr = ' *';
    }
    return field.label + reqStr;
  }

  selectOpened(focusName: string) {
    if (focusName) {
      const searchInp = document.getElementById(focusName);
      searchInp.focus();
    }
  }

  //Cada opcion del select multiple al marcarse va al principio de la lista
  marcarDesmarcarOpcion(option: any, field: FieldItem){
      option.marked = !option.marked;
      this.ordenarLista(field);
  }

 //Ordena un select multiple con las opciones marcadas arriba
  ordenarLista(field: FieldItem){
    setTimeout(() => {
    field.selectOptions.dataList.sort((a, b) => {
      if (a.marked && !b.marked) {
        return -1;  // Colocar a antes que b
      } else if (!a.marked && b.marked) {
        return 1;   // Colocar b antes que a
      } else {
        return 0;   // No realizar cambios en el orden
      }
    });
  }, 500);
  }
}