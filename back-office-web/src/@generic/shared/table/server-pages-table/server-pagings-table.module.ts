import {NgModule} from '@angular/core';
import {ServerPagingsTableComponent} from './server-pagings-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SanitizedSourcePipe} from 'src/@mc4/pipes/sanitized-source.pipe';


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
        MatProgressSpinnerModule,
        MatTooltipModule
    ],
  declarations: [ServerPagingsTableComponent, SanitizedSourcePipe],
  exports: [ServerPagingsTableComponent],
  providers: [],
})
export class ServerPagingsTableModule {
}
