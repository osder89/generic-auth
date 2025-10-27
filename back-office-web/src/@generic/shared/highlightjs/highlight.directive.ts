import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { default as hljs } from 'highlight.js/lib/core';
import { default as typescript } from 'highlight.js/lib/languages/typescript';
import { default as xml } from 'highlight.js/lib/languages/xml';
import { default as json } from 'highlight.js/lib/languages/json';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('json', json);
hljs.registerLanguage('typescript', typescript);

@Directive({
  selector: 'code[mc4Highlight]'
})
export class HighlightDirective implements AfterViewInit {

  constructor(private elem: ElementRef) {
  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.elem.nativeElement);
  }

}
