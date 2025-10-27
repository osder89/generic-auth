import { Directive } from '@angular/core';

@Directive({
  selector: '[mc4Page],mc4-page',
  host: {
    class: 'mc4-page'
  }
})
export class PageDirective {

  constructor() { }

}
