import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'mc4SanitizedSource'
})
export class SanitizedSourcePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any, type: SourceType): any {
    if (value) {
      switch (type) {
        case 'html':
          return this.sanitizer.bypassSecurityTrustHtml(value);
        case 'img':
          console.log("renderizando");
          return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        default:
          return '';
      }
    } else {
      return '';
    }
  }


}

export type SourceType = 'html' | 'img';
