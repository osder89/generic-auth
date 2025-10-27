export interface IRowInfo{
  label: string;
  value: string;
  format?: string;
  divider?: boolean;
  title?: boolean;
  multiple?: IRowGroup[],
}
export interface IRowGroup{
  name: string;
  subtitle?: string;
  value: string[];
}

export interface IShowInfoData {
  title: string;
  rows?: IRowInfo[];
  tabs?: ITabInfo[];
}

export interface ITabInfo {
  title: string;
  rows: IRowInfo[];
}
