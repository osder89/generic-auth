import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {DetailLogComponent} from '../../../app/pages/monitoreo/log/detail-log/detail-log.component';

@Component({
  selector: 'mc4-xml-bottom-viewer-component',
  template: `
    <mc4-xml-viewer [xmlStr]="this.data.code"
                    iconClose="cancel"
                    colorIconClose="warn"
                    tooltipClose="Cerrar"
                    [fileName]="this.data.fileName"
                    [backBtnFn]="backEvent"></mc4-xml-viewer>
  `
})

export class XmlBottomViewerComponent implements OnInit {
  constructor(public bottomSheetRef: MatBottomSheetRef<DetailLogComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }

  ngOnInit() {
  }

  backEvent = () => this.bottomSheetRef.dismiss();
}
