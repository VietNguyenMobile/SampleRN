export enum ErrorType {
  GENERAL = 'GENERAL',
  NETWORK = 'NETWORK',
  TIMEOUT = 'TIMEOUT',
  SERVER = 'SERVER',
  NONE = 'NONE',
  MANUAL_HANDLER = 'MANUAL_HANDLER'
}

export enum InputType {
  EMAIL = 'EMAIL',
  PHONE_NUMBER = "PHONE_NUMBER",
  PASSWORD = "PASSWORD",
  CONFIRM_PASSWORD = "CONFIRM_PASSWORD",
  GENERAL = 'GENERAL',
  FIRST_NAME = 'FIRST_NAME',
  LAST_NAME = 'LAST_NAME',
  HEIGHT = 'HEIGHT',
  WEIGHT = 'WEIGHT',
  ALPHA_NUMERIC = 'ALPHA_NUMERIC',
  DIGIT_CODE = 'DIGIT_CODE'
}

export enum ResponseCodeType {
  OK = 'OK',
}

export enum LoadingType {
  GENERAL = 'GENERAL',
  IMAGE = 'IMAGE',
  NONE = 'NONE',
}

export enum ActionMenuType {
  DELETE = 'DELETE',
  FAVORITE = 'FAVORITE'
}

export enum ResourceType {
  PRACTITIONER = 'Practitioner',
  PRACTITIONER_ROLE = 'PractitionerRole',
  CARE_TEAM = 'CareTeam',
  BUNDLE = 'Bundle',
  PATIENT = 'Patient',
  OBSERVATION = 'Observation',
  LOCATION = 'Location',
  HEALTH_CARE_SERVICE = 'HealthcareService',
  CARE_PLAN = 'CarePlan',
  COVERAGE = 'Coverage',
  ORGANIZATION = 'Organization',
}

export enum PermissionType {
  HEALTH_CARE_SERVICE_VIEW = 'PHI',
  HEALTH_CARE_SERVICE_UPDATE = 'PHI.U',
  APPOINTMENT_CREATE = 'Apnt',
  PATIENT_CALENDAR_AVAILABILITY_VIEW = 'CalAvl',
  PATIENT_CALENDAR_AVAILABILITY_CONTENT_VIEW = 'CalCnt',
  MESSAGE_ORGANIZATION_USER = 'MsgOU',
  MESSAGE_CAREGIVER_USER = 'MsgCgr',
  MESSAGE_PATIENT_USER = 'MsgPtn',
  TASK_CREATE = 'Task',
  CAREGIVER_INVITE = 'InvCgr',
  PATIENT_REPRESENTATIVES_INVITE = 'InvRep',
  PATIENT_INVITE = 'InvPtn',
  FULL = 'FullPermission'
}

export enum MedicationListType {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive'
}

export enum MedicationReasonCodeType {
  NO_LONGER_NEEDED = 'NO_LONGER_NEEDED',
  CONTRAINDICATION = 'CONTRAINDICATION',
  ADVERSE_DRUG_REACTION = 'ADVERSE_DRUG_REACTION',
  PALLIATION = 'PALLIATION',
  OTHER_REASON = 'OTHER_REASON',
}

export enum CareTeamMemberStatusType {
  PENDING = 'pending',
  CURRENT = 'current'
}

// [Accept pending, Accepted, Completed, Expired]

export enum TaskStatusType {
  ACCEPT_PENDING = 'Accept Pending',
  IN_PROGRESS = 'In Progress',
  ACCEPTED = 'Accepted',
  COMPLETED = 'Completed',
  EXPIRED = 'Expired',
  URGENT = 'Urgent',
  All = 'All',
}