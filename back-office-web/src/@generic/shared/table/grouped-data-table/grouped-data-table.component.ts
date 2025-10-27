import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {BehaviorSubject} from 'rxjs';
import {
  actionTableColumItem,
  checkRowTableColumItem,
  IsGroupItemVerifyFn,
  ITableColumn,
  ITableEvents,
  ITableRowAction,
  ITableRowCheckboxable, TableRequiredPropertyException
} from '../table.model';

@Component({
  selector: 'mc4-grouped-table',
  templateUrl: './grouped-data-table.component.html',
  styleUrls: ['./grouped-data-table.component.scss']
})
export class GroupedDataTableComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() columns: ITableColumn[];
  @Input() rowActions: ITableRowAction[];
  @Input() rowCheckConfig: ITableRowCheckboxable;
  @Input() isGroupFn: IsGroupItemVerifyFn;
  @Input() eventManager: BehaviorSubject<ITableEvents>;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor() {}

  ngOnInit() {
    if (!this.isGroupFn) throw new TableRequiredPropertyException('GroupedDataTableComponent', 'isGroupFn', 'IsGroupItemVerifyFn');
    if (!this.columns) this.columns = [];

    if (this.rowCheckConfig) this.columns.unshift(checkRowTableColumItem);
    if (this.rowActions) this.columns.push(actionTableColumItem);

    if (this.eventManager) {
      this.eventManager.subscribe(this.tableActionManager);
    }
    console.log(this.rowActions);
    console.log(this.columns);
  }

  protected tableActionManager = (event: ITableEvents) => {
    // implemente acciones aqui
  }

  rowOptionClick = (item: any, actionCode: any) => this.eventManager.next({event: 'ROW_CLICK', data: {item, actionCode}});

}
