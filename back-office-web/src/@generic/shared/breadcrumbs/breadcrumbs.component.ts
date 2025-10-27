import { Component, Input, OnInit } from '@angular/core';
import { Icrumb } from './breadcrumbs.model';

@Component({
  selector: 'mc4-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() current: string;
  @Input() img: string;
  @Input() crumbs: Icrumb[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
