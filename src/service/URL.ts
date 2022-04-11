
const FLUIDITY_URL = '';
const FIHIR_URL = ''
const REGULAR_FORM = ''

const API_URL = {
  FLUIDITY_URL,
  FIHIR_URL,
  REGULAR_FORM,
  GET_PROFILE: 'api/users',
  UPDATE_PROFILE_PHOTO: 'api/users/[id]/photo',
  UPDATE_PROFILE: 'api/users/[id]',
  VERIFIED_CODE: 'api/users/invitation/validate',
  INVITATION_INFORMATION: 'api/users/invitation',
  PDF_ORGANIZATION:
    'api/consent/organization/[organizationId]?filter=category=http://loinc.org|57016-8',
  UPLOAD_CONSENT_FILE: 'api/consent/base64-file',
  UPLOAD_DOCTOR_AVATAR: 'api/consent/file',
  SIGN_UP: 'api/users/signup',
  CHECK_EMAIL_AVAILABLE: '/api/users/email/available',
  GET_PATIENT_LIST: 'api/fhirproxy/Patient',
  GET_PATIENT_LIST_OF_CARE_GIVER_BY_USER_ID: 'api/fhirproxy/Patient?_has:RelatedPerson:patient:identifier=https://fluidity-health.com|',
  GET_PATIENT_BY_USER_ID: 'api/fhirproxy/Patient?identifier=https://fluidity-health.com|',
  UPDATE_PATIENT_RESOURCE: 'api/fhirproxy/Patient',
  CREATE_PRACTITIONER: 'api/fhirproxy/Practitioner',
  CREATE_PRACTITIONER_ROLE: 'api/fhirproxy/PractitionerRole',
  CREATE_CARE_TEAM: 'api/fhirproxy/CareTeam',
  GET_LIST_DOCTOR_BY_USER_ID: 'api/fhirproxy/PractitionerRole?_has:CareTeam:participant:category=https://fluidity-health.com|[identifierType]&_include=PractitionerRole:practitioner&_has:CareTeam:participant:patient:Patient.identifier=https://fluidity-health.com|[userID]&_count=20',
  GET_LIST_DOCTOR_BY_PATIENT_ID: 'api/fhirproxy/PractitionerRole?_has:CareTeam:participant:category=https://fluidity-health.com|[identifierType]&_include=PractitionerRole:practitioner&_has:CareTeam:participant:patient=[patientID]',
  GET_OBSERVATION_BY_PATIENT: 'api/fhirproxy/Observation?patient=Patient/[patientID]&_sort=-_lastUpdated',
  UPDATE_OBSERVATION: 'api/fhirproxy/Observation',
  GET_LIST_PHARMACY: 'api/fhirproxy/HealthcareService?service-type=[serviceType]&_include=HealthcareService:location&_has:CarePlan:performer:subject=[patientId]&active=true&_count=10&_sort=-_lastUpdated',
  GET_LIST_INSURANCE: 'api/fhirproxy/Coverage?type=https://fluidity-health.com|fluidity-insurance&status=active&_include=Coverage:policy-holder&patient=[patientId]&_count=10&_sort=-_lastUpdated',
  GET_LIST_MEDICATION: 'api/Medication?patient=[patientId]&status=[status]&orderBy=lastModified:desc&top=10&skipToken=[skipToken]',
  GET_LIST_MEDICATION_REASON: 'api/medication/reason?orderBy=lastModified:asc',
  DISCONTINUE_MEDICATION: 'api/medication/[medicationID]/discontinue',
  UPDATE_DISCONTINUE_MEDICATION: 'api/medication/[medicationID]/history/[historyID]',
  FHIR_PROXY: 'api/fhirproxy',
  GET_LIST_STATE: 'api/State?total={total}&top={top}&countryCode={countryCode}&orderBy={orderBy}',
  GET_CARE_GIVER_LIST: 'api/caregiver-users?orderBy=LastModified:desc&patient=[patientId]',
  MEDICATION: 'api/medication',
  MEDICATION_HISTORY: 'api/Medication/[medicationID]/history?orderby=lastModified:desc&total=accurate',
  ACTIVE_MEDICATION: 'api/medication/[medicationID]/active',
  CONFIGS_STATE: 'api/Configuration/State?total=accurate&countryCode=[countryCode]&orderBy=name:asc'
};

export const IDENTIFIER = {
  SYSTEM: 'https://fluidity-health.com',
  HEALTH_CARE_SERVICE_SYSTEM: 'http://terminology.hl7.org/CodeSystem/service-type',
  INSURANCE_SYSTEM: 'https://fluidity-health.com/insurance/insurance-number',
  INSURANCE_GROUP_NUMBER: 'https://fluidity-health.com/insurance/group-number',
  INSURANCE_CODE_ID: 'SP-NV-01020310',
  INSURANCE_CODE: 'fluidity-insurance',
  PHARMACY_CODE: '64',
  PHARMACY: 'Pharmacy',
  PATIENT_DOCTOR: 'patient-doctor',
  PATIENT_DOCTOR_ROLE: 'patient-doctor-role',
  PATIENT_CARE_TEAM: 'patient-careteam',
  CUSTOM_SPECIALTY: 'custom-specialty',
  PATIENT_HEALTH_CARE_SERVICE: 'patient-healthcare-service',
  PATIENT_CARE_PLAN: 'patient-care-plan',
  RELATIONSHIP_SYSTEM: 'https://www.hl7.org/fhir/codesystem-subscriber-relationship'
};

export default API_URL;
