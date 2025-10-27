import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {
  actionTableColumItem,
  ITableColumn,
  ITableEvents,
  ITableRowAction
} from '../table.model';
import {BehaviorSubject} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'mc4-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() columns: ITableColumn[];
  @Input() withPaginator = true;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 50];
  @Input() actionsWidth = '';
  @Input() rowActions: ITableRowAction[];
  @Input() singleRowActions: ITableRowAction[] = [];
  @Input() eventManager: BehaviorSubject<ITableEvents>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  classPaginator = '';

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor() {
  }

  ngOnInit() {
    if (this.eventManager) {
      this.eventManager.subscribe(this.tableActionManager);
    }
    if (this.rowActions) {
      if (!this.columns.find(item => item.property === 'actions')) {
        this.columns.unshift(actionTableColumItem);
      }
    }
  }

  ngAfterViewInit() {
    if (this.withPaginator) {
      this.dataSource.paginator = this.paginator;
      this.paginator.pageSize = this.pageSizeOptions[0];
    }
    this.dataSource.sort = this.sort;
    // if (!this.withPaginator) {
    //   this.classPaginator = 'hide-pag';
    // }
  }

  protected tableActionManager = (event: ITableEvents) => {
    if (event.event === 'RELOAD_ACTIONS') {
      if (this.rowActions.length === 0) {
        this.columns = this.columns.filter(item => item.property !== 'actions');
      }
      return;
    }
    if (event.event === 'RESET') {
      if (this.withPaginator) this.realoadPageAction();
    }
  }

  protected realoadPageAction = () => this.paginator.firstPage();

  rowOptionClick = (item: any, actionCode: any) => {
    if (this.eventManager) {
      this.eventManager.next({event: 'ROW_CLICK', data: {item, actionCode}});
    }
  }
}
