
export type ResourceType = 'item' | 'subheading';
export type LogType = 'INFO' | 'WARNING' | 'ERROR';
export type ProccessType = 'APLICACION_WEB';

export interface IRole {
  id: number;
  name: string;
  description: string;
  baseRole: boolean;
  roleStatus: string;
  baseRoleStr: string;
}

export interface IRolesByModule {
  id: number; //Module ID
  name: string, //Module name
  roles: ILista[]
}

export interface IRolesByModule {
  id: number; //Module ID
  name: string, //Module name
  roles: ILista[]
}

export interface IModuleAndRoles {
  id: number; //Module ID
  name: string, //Module name
  roles: number[]
}

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  //generatedPassword: boolean;
  fullName: string;
  userStatus: string;
  username: string;
  bizUnitIds: number[];
  regionIds: number[];
  //authType: number;
  moduleIds: number[];
  initials: string;
}

export interface IUserListAndModulesReport {
  idUser: number;
  username: string;
  fullname: string;
  rolesName: string[];
  userStatus: string;
  modulesName: string[]
}

export interface IAuthorizersUserListAndModulesReport {
  idUser: number;
  username: string;
  fullname: string;
  rolesName: string[];
  userStatus: string;
  modulesName: string[]
  //fecha inventada
}

export interface IUserCreate {
  id: number;
  username: string;
  name: string;
  lastname: string;
  userStatus: string;
  email: string;
  password: string;
  roleIds: number[];
  moduleIds: number[];
  businessUnitId: number;
  regionId: number;
  authorizerOf: number[];
  clientRole: IClientRole[];

}
export interface IClientRole {
  id: number;
  name: string;
  roleIds: number[];
}


export interface IUserInfo {
  id: number;
  name: string;
  lastname: string;
  email: string;
  fullName: string;
  state: string;
  username: string;
  roles: ILista[]
  businessUnit: ILista[];
  regions: ILista[];
  modules: ILista[];
  initials: string;
  authorizerOf: ILista[];
  createdDate: Date;
  keycloakId: string;
  moduleRoles: IRolesByModule[];
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
  modifiedDate: string;
  createdDateStr: string;
}

export interface ILista {
  id: number;
  name: string;
  value?: string;
  hide?: boolean;
}

export interface IUserSession {
  username: string;
  firstname: string;
  lastname: string;
  fullName: string;
  time: Date;
  ipAddress: string;
  module: string;
}
