import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntityRegisterDialogComponent} from './entity-register-dialog.component';
import {MC4CardModule} from '../card/card.module';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DragAreaDirective} from '../../pipes/drag-area.directive';
import {MatRadioModule} from "@angular/material/radio";
import {SelectMultipleSearchModule} from "../select-multiple-search/select-multiple-search.module";

@NgModule({
  declarations: [
    EntityRegisterDialogComponent,
    DragAreaDirective
  ],
    imports: [
        CommonModule,
        MC4CardModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FlexModule,
        MatIconModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatDividerModule,
        MatTooltipModule,
        MatRadioModule,
        SelectMultipleSearchModule
    ],
  exports: [
    EntityRegisterDialogComponent
  ]
})
export class EntityRegisterDialogModule { }
