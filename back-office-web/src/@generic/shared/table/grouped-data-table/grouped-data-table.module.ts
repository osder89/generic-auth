import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupedDataTableComponent} from './grouped-data-table.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  declarations: [GroupedDataTableComponent],
  exports: [GroupedDataTableComponent]
})
export class GroupedDataTableModule { }
