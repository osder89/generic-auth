import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {IRowInfo, IShowInfoData, ITabInfo} from "./show-info-dialog.model";
import {fadeInUpAnimation} from "../../animations/fade-in-up.animation";
import {fadeInRightAnimation} from "../../animations/fade-in-right.animation";


@Component({
  selector: 'mc4-show-info-dialog',
  templateUrl: './show-info-dialog.component.html',
  styleUrls: ['./show-info-dialog.component.scss'],
  animations: [fadeInUpAnimation, fadeInRightAnimation]
})
export class ShowInfoDialogComponent implements OnInit {
  tabsList: ITabInfo[];
  infoRows : IRowInfo[];
  title: string
  format:string;

  constructor(public dialogRef: MatDialogRef<ShowInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IShowInfoData
  ) {

  }
  ngOnInit() {
    this.title = this.data.title;
    this.infoRows = this.data.rows;
    this.tabsList = this.data.tabs;
    console.log("Current Tabs", this.tabsList, this.data.tabs);
    console.log("Current Content", this.title, this.infoRows);
  }

  checkEmail(value: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(value)) {
      return true
    }
    return false; // or return a message like 'Invalid Email'
  }

}
