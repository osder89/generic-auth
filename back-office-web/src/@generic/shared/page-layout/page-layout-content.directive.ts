import { Directive } from '@angular/core';

@Directive({
  selector: '[mc4PageLayoutContent],mc4-page-layout-content',
  host: {
    class: 'mc4-page-layout-content'
  }
})
export class PageLayoutContentDirective {

  constructor() { }

}
