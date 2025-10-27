import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'mc4-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'mc4-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MC4Card {
}

// noinspection TsLint
@Component({
  selector: 'mc4-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'mc4-card-header' },
  template: `
    <div class="mc4-card-header-heading-group">
      <ng-content select="mc4-card-header-heading"></ng-content>
      <ng-content select="mc4-card-header-subheading"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="mc4-card-header-actions"></ng-content>
  `
})
export class MC4CardHeader {
}

// noinspection TsLint
@Component({
  selector: 'mc4-card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'mc4-card-content' },
  template: `
    <ng-content></ng-content>`
})
export class MC4CardContent {
}

// noinspection TsLint
@Directive({
  selector: 'mc4-card-header-heading',
  host: { 'class': 'mc4-card-header-heading' }
})
export class MC4CardHeaderTitle {
}

// noinspection TsLint
@Directive({
  selector: 'mc4-card-header-subheading',
  host: { 'class': 'mc4-card-header-subheading' }
})
export class MC4CardHeaderSubTitle {
}

// noinspection TsLint
@Directive({
  selector: 'mc4-card-header-actions',
  host: { 'class': 'mc4-card-header-actions' }
})
export class MC4CardHeaderActions {
}

// noinspection TsLint
@Directive({
  selector: 'mc4-card-actions',
  host: {
    'class': 'mc4-card-actions',
    '[class.mc4-card-actions-align-end]': 'align === "end"',
  }
})
export class MC4CardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}
