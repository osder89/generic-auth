
export type ResourceType = 'item' | 'subheading';
export type LogType = 'INFO' | 'WARNING' | 'ERROR';
export type ProccessType = 'APLICACION_WEB';

export interface IAuditConfiguration {
  id: number;
  createdBy: string;
  createdDate: string;
  module: string;
  auditTable: string;
}


export interface ICreatedAuditConfiguration {
  id: number;
  module: string;
  auditTable: string;
}

export interface IauditTableDatabase {
  name: string;
}


export interface ICreateAuditConfigurationRequest {
  moduleId: number;
  auditTable: string;
}

//revisar
export interface IRole {
  id: number;
  name: string;
  description: string;
  baseRole: boolean;
  roleStatus: string;

  baseRoleStr: string;
}


export interface IModule {
  id: number;
  name: string;
}

export interface IAuditDatabase {
  name: string;
}


export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  generatedPassword: boolean;
  fullName: string;
  userStatus: string;
  username: string;
  idAuthRole: number;
  authType: number;
  rolName: string;

  initials: string;
}

export interface IUserAccess {
  resourceId: number;
  name: string;
  isParent: boolean;
  url: string;
  checked: boolean;
  idRoleResource: number;
}

export interface IAction {
  id: number;
  action: string;
  code: string;
  baseAction: boolean;
}

export interface IPrivilege {
  id: number;
  idAuthAction: number;
  idAuthRoleResource: number;
  enable: boolean;
}

export interface IResource {
  id: number;
  idResourceParent: number;
  name: string;
  icon: string;
  route: string;
  subItems: IResource[];
  position: number;
  pathMatchExact: boolean;
  type: ResourceType;
  badge: string;
  badgeColor: string;
  customClass: string;
}

export interface IParameter {
  id: number;
  code: string;
  description: string;
  stringValue: string;
  boolValue: string;
  numberValue: number;
  dateValue: string;
  parameterType: string;
  encode: boolean;
  encodeStr: string;
  lobValue: string;
  idParameterGroup: number;

  value: string;
}

export interface IParameterGroup {
  id: number;
  description: string;
  groupName: string;
}

export interface LogRequest {
  message: string;
  pagina: string;
  stack: string;
}

export interface ILog {
  id: number;
  username: string;
  processType: string;
  logType: string;
  log: string;
  pagina: string;
  createdDate: string;
  createdDateStr: string;
}
