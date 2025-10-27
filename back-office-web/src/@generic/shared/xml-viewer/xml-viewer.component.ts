import {Component, Input, OnInit} from '@angular/core';
import {fileUtil} from '../../../app/commons/utils/file.util';
import {XmlPipe} from '../../pipes/xml.pipe';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BackBtnFn} from './xml-viewer.model';
import escape from 'lodash-es/escape';

@Component({
  selector: 'mc4-xml-viewer',
  templateUrl: 'xml-viewer.component.html',
  styleUrls: ['xml-viewer.component.scss']
})

export class XmlViewerComponent implements OnInit {
  @Input() xmlStr: string;
  @Input() iconClose = 'arrow_back';
  @Input() tooltipClose = 'Atrás';
  @Input() fileName = 'descarga.xml';
  @Input() colorIconClose: 'primary' | 'accent' | 'warn' = 'accent';
  @Input() backBtnFn: BackBtnFn;
  xmlStrCode: string;
  constructor(private xmlPipe: XmlPipe, private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.xmlStrCode = escape(this.xmlPipe.transform(this.xmlStr));
  }

  async copyToClipboard() {
    await navigator.clipboard.writeText(this.xmlPipe.transform(this.xmlStr));
    this.matSnackBar.open('Copiado al porta papeles');
  }

  downloadFileMessage() {
    fileUtil.downloadTextAsFile(this.xmlPipe.transform(this.xmlStr), this.fileName);
  }
}
