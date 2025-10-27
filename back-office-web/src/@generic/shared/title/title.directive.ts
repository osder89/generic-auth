import { Directive } from '@angular/core';

@Directive({
  selector: '[mc4Title],mc4-title',
  host: {
    class: 'mc4-title'
  }
})
export class TitleDirective {

  constructor() { }

}
