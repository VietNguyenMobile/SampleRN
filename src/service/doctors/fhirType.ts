export type MetaResponse = {
  versionId?: string;
  lastUpdated: string;
  tag?: Array<Coding>;
};

export type Coding = {
  system: string;
  code: string;
  display?: string;
  version?: string;
  userSelected?: boolean;
};

export type CodingConcept = {
  coding?: Array<Coding>;
  text?: string;
};

export type IdentifierObject = {
  system: string;
  value: string;
  type?: CodingConcept
};

export type NameObject = {
  family: string; // last name
  given: Array<string>; // first name and sure name
  prefix: Array<string>;
  text?: string
  use?: 'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden'
};

export type ContactSystem =
  | 'phone'
  | 'fax'
  | 'email'
  | 'pager'
  | 'url'
  | 'sms'
  | 'other';
export type ContactUse = 'home' | 'work' | 'temp' | 'old' | 'mobile';

export type ContactObject = {
  system: ContactSystem;
  value: string;
  use: ContactUse;
};

export type AddressUse = 'home' | 'work' | 'temp' | 'old' | 'billing';
export type AddressObject = {
  use: AddressUse;
  line: Array<string>;
  city: string;
  state: string;
  postalCode: string;
  text: string; // use for Address Label or Address type
  country: string;
};

export type Reference = {
  reference: string;
  display?: string;
  type?: string;
  identifier?: string;
};

export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export type AvailableTimeObject = {
  daysOfWeek: Array<DayOfWeek>;
  allDay?: boolean;
  availableStartTime?: string;
  availableEndTime?: string;
};

export type Status = 'active' | 'inactive' | 'final' | 'cancelled';

export type Participant = {
  role: Array<CodingConcept>;
  member: Reference;
};

export type Narrative = {
  status?: Status;
  div?: string;
};

export type DomainResource = {
  resourceType: string;
  id: string;
  meta?: MetaResponse;
  text?: Narrative;
};

export type LinkElement = {
  relation: 'self' | 'next';
  url: string;
};

export type SearchObject = {
  mode: 'match' | 'include';
};

export type Attachment = {
  contentType: string | 'image/jpeg' | 'image/png';
  url: string;
  size?: number;
};

export type Gender = 'male' | 'female' | 'other' | 'unknown'

export type PatientResource = {
  fullUrl: string;
  resource: PatientSingleResource;
  search: SearchObject;
};

export type PatientSingleResource = DomainResource & {
  identifier: Array<IdentifierObject>;
  photo?: Array<Attachment>;
  active?: boolean;
  deceasedBoolean?: boolean;
  practitioner: Reference;
  specialty: Array<CodingConcept>;
  availableTime: Array<AvailableTimeObject>;
  name?: Array<NameObject>;
  gender: Gender,
  birthDate?: string;
  telecom?: Array<ContactObject>;
  address?: Array<AddressObject>;
  contact?: Array<RelationShipContact>;
  managingOrganization?: Array<Reference>;
};

export type PractitionerRoleResource = {
  fullUrl: string;
  resource: DomainResource & {
    identifier: Array<IdentifierObject>;
    photo?: Array<Attachment>;
    active: boolean;
    practitioner: Reference
    specialty: Array<CodingConcept>
    availableTime: Array<AvailableTimeObject>
  };
  search: SearchObject;
};

export type PractitionerListResponse = DomainResource & {
  type: 'searchset' | string,
  link: Array<LinkElement>,
  entry: Array<PatientResource | PractitionerRoleResource>
}

export type RelationShipContact = {
  relationship: Array<CodingConcept>;
  name: NameObject;
  telecom: Array<ContactObject>;
  address?: AddressObject;
  gender: Gender;
}

export type UnitMeasure = 'cm' | 'inch' | 'kg' | 'g' | 'lbs'

export type QuantityObject = {
  value: number;
  unit: UnitMeasure;
  system: string;
  code?: 'cm' | '[in_i]' | 'kg' | 'g' | '[lb_av]';
}

export type ObservationResource = {
  fullUrl: string;
  resource: DomainResource & {
    status: Status;
    category: Array<CodingConcept>;
    code: CodingConcept;
    subject: Reference;
    valueQuantity: QuantityObject
  };
  search: SearchObject;
}

export type Intent = 'proposal' | 'plan' | 'order' | 'option'

export type Activity = {
  detail: {
    performer: Array<Reference>
  }
}
export type ResponseTransaction = {
  status: string;
  location: string;
  etag: string;
  lastModified: string;
}

export type LocationResource = DomainResource & {
  status: Status;
  name: string;
  description: string;
  address: AddressObject;
}

export type HealthcareServiceResource = DomainResource & {
  active: boolean;
  type: Array<CodingConcept>;
  location: Array<Reference>;
  name: string;
  comment: string;
  extraDetails?: string;
  telecom: Array<ContactObject>;
  category: CodingConcept;
  appointmentRequired: boolean;
  availableTime: Array<AvailableTimeObject>;
}

export type CoverageResource = DomainResource & {
  identifier: Array<IdentifierObject>;
  status: Status;
  type: CodingConcept;
  policyHolder: Reference;
  beneficiary: Reference;
  relationship: CodingConcept;
  payor: Reference;
}

export type OrganizationResource = DomainResource & {
  name?: string;
  telecom: Array<ContactObject>;
  address: Array<AddressObject>;
}

export const CODE = {
  BODY_HEIGHT: '8302-2',
  BODY_WEIGHT: '29463-7'
}
