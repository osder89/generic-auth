import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleTableComponent} from './simple-table.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    SimpleTableComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  exports: [
    SimpleTableComponent
  ]
})
export class SimpleTableModule { }
