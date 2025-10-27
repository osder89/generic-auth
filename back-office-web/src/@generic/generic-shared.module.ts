import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsModule } from './shared/breadcrumbs/breadcrumbs.module';
import { TitleModule } from './shared/title/title.module';
import { PageModule } from './shared/page/page.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PageLayoutModule } from './shared/page-layout/page-layout.module';
import {EntityRegisterDialogModule} from './shared/entity-register-dialog/entity-register-dialog.module';
import {ServerPagingTableModule} from './shared/table/server-page-table/server-paging-table.module';
import {ServerPagingsTableModule} from './shared/table/server-pages-table/server-pagings-table.module';
import {GroupedDataTableModule} from './shared/table/grouped-data-table/grouped-data-table.module';
import {SimpleTableModule} from './shared/table/simple-table/simple-table.module';
import {XmlPipe} from './pipes/xml.pipe';
import {XmlViewerModule} from './shared/xml-viewer/xml-viewer.module';
import { SelectMultipleSearchModule } from './shared/select-multiple-search/select-multiple-search.module';
import { SanitizedSourcePipe } from './pipes/sanitized-source.pipe';
import {ShowInfoDialogModule} from "./shared/show-info/show-info-dialog.module";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    BreadcrumbsModule,
    TitleModule,
    PageModule,
    SidebarModule,
    RouterModule,
    PageLayoutModule,
    EntityRegisterDialogModule,
    ServerPagingTableModule,
    ServerPagingsTableModule,
    GroupedDataTableModule,
    SimpleTableModule,
    XmlViewerModule,
    SelectMultipleSearchModule,
    ShowInfoDialogModule,

    // External
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule,
    FontAwesomeModule,
    ScrollingModule,
  ],
  providers: [
    XmlPipe,
    SanitizedSourcePipe
  ]
})
export class GenericSharedModule {
}
