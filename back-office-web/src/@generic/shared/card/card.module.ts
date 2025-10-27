import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MC4Card,
  MC4CardActions,
  MC4CardContent,
  MC4CardHeader,
  MC4CardHeaderActions,
  MC4CardHeaderSubTitle,
  MC4CardHeaderTitle
} from './card.component';

const cardComponents = [
  MC4Card,
  MC4CardHeader,
  MC4CardHeaderTitle,
  MC4CardHeaderSubTitle,
  MC4CardHeaderActions,
  MC4CardContent,
  MC4CardActions
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...cardComponents
  ],
  exports: [
    ...cardComponents
  ]
})
export class MC4CardModule {
}
