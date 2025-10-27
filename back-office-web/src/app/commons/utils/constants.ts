export class Constants {
  static OK_CODE = '000';
}

export const resourceCode = {
  userResourceCode: 'PAGE_USUARIOS',
  ordenResourceCode: 'PAGE_ORDENES',
  mensajeResourceCode: 'PAGE_MENSAJES',
  roleResourceCode: 'PAGE_ROLES',
  resourcePageCode: 'PAGE_RECURSOS',
  accessResourceCode: 'PAGE_ACCESOS',
  parameterResourceCode: 'PAGE_PARAMETROS',
  participanteResourceCode: 'PAGE_PARTICIPANTES',
  horarioAtencionResourceCode: 'PAGE_HORARIO_ATENCION',
  logResourceCod: 'PAGE_BITACORA',
  jobResourceCode: 'PAGE_JOB',
  contingenciaCamaraResourceCode: 'PAGE_CONTINGENCIA_CAMARA',
  domainResourceCode: 'PAGE_DOMINIO',
  reportResourceCode: 'PAGE_REPORTE_CONCILIACION',
  auditManagementResourceCode:'PAGE_AUDIT',
  auditResourceCode: 'PAGE_AUDIT_LOG',
  unidadNegocioResourceCode:'PAGE_UNIDAD_NEGOCIO',
  moduleResourceCode: 'PAGE_MODULE',
  regionsResourceCode:'PAGE_REGIONS',
  patientResourceCode:'PAGE_PATIENT',
  medicResourceCode:'PAGE_MEDIC',
  patientAdminstratorResourceCode:'PAGE_ADMINISTRATOR_MEDIC_QUOTE',
  centerCosteResourceCode: 'PAGE_CENTER_COSTE',
  userReportResourceCode:'USER_REPORT',
  authorizerReportResourceCode:'AUTHORIZER_REPORT',
  userAccesReportResourceCode:'USER_ACCESS_REPORT',
  calendarResourceCode:'PAGE_CALENDAR',
  roomResourceCode:'PAGE_ROOM',
  roomAssingMedicRoom:'PAGE_MEDIC_ROOM',
  cie10ResourceCode: 'PAGE_CIE10',
  imcResourceCode: 'PAGE_IMC',
  nurseResourceCode: 'PAGE_NURSE',
  vaccinationResourceCode: 'PAGE_VACCINATION',
  patientRoomActions: 'PAGE_PATIENT_ROOM',
  nursingCareResourceCode: 'PAGE_NURSING_CARE',
  medicalDocumentsResourceCode: 'PAGE_MEDICAL_DOCUMENT',
  patientAdmissionResourceCode: 'PAGE_PATIENT_ADMISSION',
  medicalTransferResourceCode: 'PAGE_MEDICAL_TRANSFERS',
};

export enum EnumAuthorizationStatus {
  ACTIVO    = "ACTIVO",
  INACTIVO  = "INACTIVO",
  VALIDO    = "VÁLIDO",
  INVALIDO  = "INVÁLIDO",
  COMPLETADO = "COMPLETADO",
  PENDIENTE = "PENDIENTE",
  CANCELADO = "CANCELADO",
  CANCELADA = "CANCELADA",
  COMPLETADA = "COMPLETADA",
  ALTA = "ALTA",
}

export enum EnumAuthorizationColors {
  VALID     = '#008000', //? CREADO
  INVALID   = '#DC143C', //? PENDIENTE
  ACCEPTED  = '#008000', //? ACEPTADO
  REJECTED  = '#DC143C', //? RECHAZADO
  CANCELED  = '#8B0000', //? CANCELADO
  PENDING  = '#FC4C00FF', //? CANCELADO
}

export const AUTHORIZATION_COLORS: { [key: string]: string } = {
  [EnumAuthorizationStatus.ACTIVO]: EnumAuthorizationColors.VALID,
  [EnumAuthorizationStatus.INACTIVO]: EnumAuthorizationColors.INVALID,
  [EnumAuthorizationStatus.VALIDO]: EnumAuthorizationColors.ACCEPTED,
  [EnumAuthorizationStatus.INVALIDO]: EnumAuthorizationColors.REJECTED,
  [EnumAuthorizationStatus.COMPLETADO]: EnumAuthorizationColors.ACCEPTED,
  [EnumAuthorizationStatus.PENDIENTE]: EnumAuthorizationColors.PENDING,
  [EnumAuthorizationStatus.CANCELADO]: EnumAuthorizationColors.CANCELED,
  [EnumAuthorizationStatus.CANCELADA]: EnumAuthorizationColors.CANCELED,
  [EnumAuthorizationStatus.COMPLETADA]: EnumAuthorizationColors.ACCEPTED,
  [EnumAuthorizationStatus.ALTA]: EnumAuthorizationColors.PENDING,
}

export enum EnumNotificationState {
  SENT = 'ENVIADO',
  IS_READ = 'LEIDO',
  DELETED = 'ELIMINADO',
}

export enum EnumNotificationType {
  MEDICAL_APPOINTMENT = 'CITA MÉDICA',
  NURSING_CARE = 'ATENCIÓN DE ENFERMERÍA',
  VITAL_SIGN_ALERT = 'ALERTA DE SIGNOS VITALES'
}




