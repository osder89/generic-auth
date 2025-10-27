import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MC4CardModule} from '../card/card.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import {ShowInfoDialogComponent} from "./show-info-dialog.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
     ShowInfoDialogComponent
  ],
	imports: [
		CommonModule,
		MC4CardModule,
		MatDividerModule,
		FlexLayoutModule,
		MatTooltipModule,
		MatIconModule,
		MatButtonModule,
		MatExpansionModule,
		MatStepperModule,
		MatButtonModule,
		MatInputModule,
	],
    exports: [
        ShowInfoDialogComponent
    ]
})
export class ShowInfoDialogModule { }
