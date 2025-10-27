

export type KeycloakProtocol = 'OPEN_ID' | 'SAML';

export interface IQuote{

  id:number;
  personalSaludId:IMedic;
  patientId:IPatient;
  ventaId:number;
  startDate:any;
  endDate:any;
  startDateString:string;
  endDateString:string;
  startTime:number;
  endTime:number;
  startedQuoteTime?: number; // Took place
  endedQuoteTime?: number; // Took place
  endedQuotePeriod?: string;
  quoteType:string;
  quoteStatus:string;
  description:string;
  zonaHoraria:string;
  businesUnitId:number;
  teamsUrl:string;
  recurrency:number;
  quotePrincipalId:number;
  recurrenciaQuantity:number;
  cancelDescription:string;
  location:string;
  medicRoomId:any;

}



export interface IParticipante {
  id: number;
  abreviacion: string;
  camara: any;
  codigo: string;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  nombre: string;
  padre: any;
  tipo: string;
  version: string;

  camaraId: string;
  camaraStr: string;
  padreId: string;
  padreStr: string;
  fullName: string;
}

export interface IParticipanteReq {
  codigo: string;
  nombre: string;
  abreviacion: string;
  tipo: string;
  idCamara: number;
  idPadre: number;
  certificatePublic: any[];
  certificatePrivate: any[];

  certificatePublicStr: string;
  generaCert: boolean;
}

export interface IParticipanteResp {
  id: number;
  nombre: string;
  codigo: string;
  abreviacion: string;
  tipo: string;
  camara: IParticipanteResp;
  padre: IParticipanteResp;
}

export interface ICertificado {
  id: number;
  participanteId: number;
  jks: number[]; // byte[]
  fechaVencimiento: string;
  serial: string;
  password: string;
  jksStr: string;
}

export interface IHorarioAtencion {
  id: number;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  version: string;
  detalle: string;
  diaSemana: string;
  estadoHorario: string;
  horaInicio: string;
  horaFin: string;
  esHabilitado: boolean;
}

export interface IHorarioAtencionReq {
  id: number;
  // createdBy: string;
  // createdDate: string;
  // deleted: boolean;
  // modifiedBy: string;
  // modifiedDate: string;
  // version: string;
  detalle: string;
  diaSemana?: string;
  // diaSemana: IDiasSemanaReq;
  // estadoHorario: string;
  horaInicio: string;
  horaFin: string;
  esHabilitado: boolean;
}

export interface IHorarioAtencionResp {
  id: number;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  version: string;
  detalle: string;
  diaSemana: string;
  estadoHorario: string;
  horaInicio: string;
  horaFin: string;
  esHabilitado: boolean;
}

export interface IHorarioAtencionForm {
  id: number;
  // createdBy: string;
  // createdDate: string;
  // deleted: boolean;
  // modifiedBy: string;
  // modifiedDate: string;
  // version: string;
  detalle: string;
  diaSemana: string[];
  // estadoHorario: string;
  horaInicio: string;
  horaFin: string;
  esHabilitado: boolean;
}

export interface IDiasSemana{
    descripcion: string;
    codigo: number;
}


export type JobStatusType = 'SCHEDULED' | 'PAUSED' | 'RUNNING';
export interface IJob {
  groupName: string;
  jobName: string;
  triggerName: string;
  scheduleTime: string;
  lastFiredTime: string;
  nextFireTime: string;
  jobStatus: JobStatusType;
  description: string;
  cronExpression: string;
  triggerKey: string;
}

export type JobHistoryStatusType = 'FINALIZADO' | 'REPROGRAMADO' | 'ERROR' | 'WARNING' | 'EJECUTANDO';
export interface IJobHistory {
  id: number;
  groupName: string;
  jobName: string;
  startTime: string;
  endTime: string;
  jobState: JobHistoryStatusType;
  message: string;
}

export interface IContingenciaCamara {
  id: number;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  version: string;
  etapaContingencia: string;
  fechaInicio: string;
  fechaFin: string;
  motivo: string;
  tipoContingencia: string;
  tipoOperacion: string;
  participanteCamara: IParticipante;
  abreviacionCamara: string;
  // idParticipanteCamara: number;
}

export interface IContingenciaCamaraReq {
  id: number;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  version: string;
  etapaContingencia: string;
  fechaInicio: string;
  fechaFin: string;
  motivo: string;
  tipoContingencia: string;
  tipoOperacion: string;
  nombreCamara: string;
  idParticipanteCamara: number;
}

export interface IContingenciaCamaraForm {
  id: number;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  version: string;
  etapaContingencia: string;
  fechaInicio: string;
  fechaFin: string;
  motivo: string;
  tipoContingencia: string;
  tipoOperacion: string;
  nombreCamara: string;
  idParticipanteCamara: number;
}

export interface ITipoOperacion{
  descripcion: string;
  codigo: string;
}

export interface ICamara{
  descripcion: string;
  codigo: number;
}

export interface IDomain {
  id: number;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  version: string;
  value: string;
  description: string;
}
//
// export interface IDominioForm {
//   id: number;
//   createdBy: string;
//   createdDate: string;
//   deleted: boolean;
//   modifiedBy: string;
//   modifiedDate: string;
//   version: string;
//   value: string;
//   description: string;
// }

export interface IDomainValue {
  id: number;
  createdBy?: string;
  createdDate?: string;
  deleted?: boolean;
  modifiedBy?: string;
  modifiedDate?: string;
  version?: string;
  value: string;
  description?: string;
  hide?: any;
}

export interface IDomainSelect{
  id :string;
  name :string;
  description?: string;
}

export interface IDomainSelect1{
  id :string;
  value :string;
  description: string;
}

export interface IDomainValueForm {
  id: number;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  version: string;
  value: string;
  description: string;
  idDomain: string;
}

export interface IDomainValueReq {
  id: number;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  modifiedBy: string;
  modifiedDate: string;
  version: string;
  value: string;
  description: string;
  idDomain: string;
}

export interface IUnidadNegocio {
  id: number;
  createdDate: string;
  modifiedDate: string;
  name: string;
  description: string;
  pagina: string;
  createdDateStr: string;
  regionDto: IRegion;
  regionMostrar: string;
  longitude?:     number;
  latitude?:      number;
  radio?:         number;
  influenceArea?: IRegionCoverArea;
}
export interface IUnidadNegocioInfo {
  id: number;
  name: string;
  description:string;
  regionId: number;
  centerCostIds: number [];
  influenceArea?: IRegionCoverArea;
  regionDto?;
}

export interface IRegion {
  id: number;
  name: string;
  description: string;
  createdDate: Date;
  createdDateStr: string;
  hide?: any;
}

export interface IRegionCoverArea {
  lat:    number;
  lng:    number;
  radius: number;
}

export interface ICenterCoste {
  id: number;
  name: string;
  description: string;
  createdDate: Date;
  createdDateStr: string;
}

export interface IModule {
  id: number;
  creationDate: string;
  modificationDate: string;
  name: string;
  description: string;
  baseUrl: string;
  rootUrl: string;
  protocol: KeycloakProtocol;
  icon:  string | any;
  clientId: string;
  schema: string;
}

export interface IPatient{
  id: number;
  clientCode: string;
  name: string;
  lastname: string;
  motherLastname: string;
  documentNumber: string;
  complement: string;
  documentType: number;
  birthDate: Date;
  gender: string;
  race: string;
  occupation: string;
  bloodType: string;
  countryId?: string;
  countryDescriptionCtrl?: string;
  stateDepartment: string;
  municipality: string;
  maritalStatus : string;
  phoneNumber? :string; //Eliminar
  placeBirth :string;
  // sureId:number; //Eliminar
  // planId:number; //Eliminar
  foreignStatus: boolean;
  // longitude: number; //Eliminar
  // latitude: number; //Eliminar
  photoBase64: string;

  relationshipList?: number[];
  fullName?: string;
  formattedBirthDate?: string;
  hide?: any;
  age?: number;
  idAdmission? //forPatientAdmission
  pacientStringIdentifier?
  fumState?: string;
  fumComentary?: string;
  country?: string;
}

export interface IContactPatient { //Used for register new Patient for Contact Only Purposes
  id: number;
  clientCode: string;
  name: string;
  lastname: string;
  motherLastname: string;
  documentNumber: string;
  complement: string;
  documentType: number;
  birthDate: Date;
  gender: string;
  occupation: string;
  bloodType: string;
  fullName?: string;
  onlyKin?: boolean;
  pacientStringIdentifier?
}

export interface IBusinessUnit{

  id:number;
  description:string;
  entityState:string;
  region:IRegion;

}

export interface IMedic{
    id:number;
    ci:string;
    complemento:string;
    lugarEmision:string;
    nit:string;
    nombre:string;
    apellido:string;
    fechaNacimiento:Date;
    telefono:string;
    tipoSangre:string;
    genero:string;
    estadoCivil: string;
    fechaInicioContrato: Date;
    fechaFinContrato: Date;
    fechaInicioContratoString:string;
    fechaFinContratoString:string;
    matriculaProfesional: string;
    direccionParticular: string;
    telefonoContacto: string;
    personaContacto: string;
    tipoMedico: string;
    businessUnit: string;
    medicalSpeciality: string;
    idEmployee: number;
    pin?: number;
    userId?: number;
}

export interface IRoom{
  id:number;

  description:string;

  roomNumber:string;


  typeRoom:string;


  businessUnit:IBusinessUnit;

  businessUnitName:string;

}

export interface IMedicRoom{

  id:number;

  idMedic:number;

  medicName:string;

  roomNumber:string

  idRoom:number;

  startDate:string;

  endDate:string;

  startTime:number;

  endTime:number;

  startTimeString:string;

  endTimeString:string;

  businessUnit:number;

  businessUnitName:string;

  medicalSpeciality:number;

}

export interface ISureDto {
  idSure :number;
  nameSure :string;
  planSure: IPlanSureDto[];
}

export interface IPlanSureDto{
  idPlanSure :number;
  namePlanSure :string;
  startDatePlanSure?: Date;
  endDatePlanSure?: Date;
}

export interface ISureDataDto {
  id: number;
  nit: string;
  name: string;
  address: string;
  phone: string;

  idRegion: number; //Revisar
  nameRegion: string;
  idBusinessUnit: number;
  nameBusinessUnit: string;

  createdBy: string;
  createdDate: string;
  modifiedDate: string;
}

export interface IPlanDataDto{
  id: number;
  name: string;
  code: string;
  startDate: Date;
  endDate: Date;
  idSure: number;
  categoryPlan: string;
}

export interface Email{
   key:string;
   subject:string;
   body:string;
   to:string[];
   cc:string[];
   bcc:string[];
}

export interface IGuest{
  id:number;

  guestType:string;

  emailAddress:string;

  idQuote:number;

  idEmployee:number;
}

export interface IRecurrency{

  id:number;

  monday:boolean;

  tuesday:boolean;

  wednesday:boolean;

  thursday:boolean;

  fryday:boolean;

  saturday:boolean;

  sunday:boolean;

  idQuote:number;

  recurrencyQuantity:number;

  recurrencyEndDate:Date;

  recurrencyType:string;

  recurrencyEndType:string;
}

export interface ISignatureMedic {
  id?: number;
  firmaBase64: string;
  firmaBaseDigital64: string;
  selloBase64: string;
  medicId: number;
  pin: number;
}

export interface IAddress {
  id?: number;
  address: string;
  zone: string;
  latitude: number;
  longitude: number;
  patientId: number;
  deleted: boolean;
  reference?: string;
  geoReference?: boolean;
}

export interface IEmail {
  id?: number;
  email: string;
  patientId: number;
  main: boolean;
  deleted: boolean;
}

export interface IPhoneNumber {
  id?: number;
  phoneNumber: string;
  patientId: number;
  main: boolean;
  deleted: boolean;
}

export interface IContact { //Used for show Patient association with  for Contact Only Purposes
  id?: number;
  kinId: number;
  dependentKinId: number;
  fullNameKin?: string;
  typeKin: string;
  oppositeKin?: string;
  deleted: boolean;
  comments?: string;
}

export interface IPatientInsurance {
  id?: number;
  idPatient: number;
  idInsurance: number;
  idPlan: number;
  nameInsurance: string;
  namePlan: string;
  subscriptionDate: Date;
  startValidityPlan: Date;
  endValidityPlan: Date;
  insStatus?: string; //ACTIVO INACTIVO
  validity?: string; //VALIDO INVALIDO
}

export interface PossibleUserResponseDto {
  userId: number;
  keycloakId: string;
  userName: string;
  fullName: string;
  name: string;
  lastName: string;
}

export interface IVitals {
  height: string;
  weight: string;
  imc: string;
  imcDiagnosis: string;
  temperature: string;

  pa_mmHg: string;
  sat_o2: string;

  fc_lpm: number;
  fc_LPM: number;
  fr_LPM: number;
}

export interface ISoap {
  subjective: string;
  objetive: string;
  actionPlan: string;
  diagnosis: string
}

