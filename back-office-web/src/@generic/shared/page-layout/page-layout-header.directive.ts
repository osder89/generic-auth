import { Directive } from '@angular/core';

@Directive({
  selector: '[mc4PageLayoutHeader],mc4-page-layout-header',
  host: {
    class: 'mc4-page-layout-header'
  }
})
export class PageLayoutHeaderDirective {

  constructor() { }

}

