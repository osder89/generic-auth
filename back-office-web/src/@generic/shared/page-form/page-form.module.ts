import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenericSharedModule} from '../../generic-shared.module';
import {MC4CardModule} from '../card/card.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ListModule} from '../list/list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { PageFormComponent } from './page-form.component';


@NgModule({
  declarations: [
     PageFormComponent
  ],
  imports: [
    CommonModule,
    GenericSharedModule,
    MC4CardModule,
    FlexLayoutModule,
    ListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
    ],
    exports: [
        PageFormComponent
    ]
})
export class PageFormModule { }
