import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mc4PageLayout],mc4-page-layout',
  host: {
    class: 'mc4-page-layout'
  }
})
export class PageLayoutDirective {

  @Input() mode: 'card' | 'simple' = 'simple';

  constructor() { }

  @HostBinding('class.mc4-page-layout-card')
  get isCard() {
    return this.mode === 'card';
  }

  @HostBinding('class.mc4-page-layout-simple')
  get isSimple() {
    return this.mode === 'simple';
  }

}
