import {
  AddressObject,
  Attachment,
  AvailableTimeObject,
  CodingConcept,
  ContactObject,
  IdentifierObject,
  NameObject,
  Narrative,
  Participant,
  Reference,
  Status,
} from '../fhirType';

export type PractitionerRequest = {
  resourceType: string;
  id?: string;
  identifier: Array<IdentifierObject>;
  active: boolean;
  name: Array<NameObject>;
  telecom: Array<ContactObject>;
  address: Array<AddressObject>;
  text?: Narrative;
  photo: Array<Attachment>;
};

export type PractitionerRoleRequest = {
  resourceType: string;
  id?: string;
  identifier: Array<IdentifierObject>;
  active: boolean;
  practitioner: Reference;
  specialty: Array<CodingConcept>;
  telecom?: Array<ContactObject>;
  availableTime: Array<AvailableTimeObject>;
};

export type CareTeamRequest = {
  resourceType: string;
  identifier: Array<IdentifierObject>;
  status: Status;
  category: Array<CodingConcept>;
  name: string;
  subject: Reference; // Patient ID
  participant: Array<Participant>;
};

export type DoctorTransactionRequest = {
  resourceType: string;
  type: string;
  entry: [
    {
      fullUrl: string;
      request: {
        method: 'POST' | 'PUT' | 'GET';
        url: string;
      };
      resource: PractitionerRequest;
    },
    {
      fullUrl: string;
      request: {
        method: 'POST' | 'PUT' | 'GET';
        url: string;
      };
      resource: PractitionerRoleRequest;
    },
    {
      fullUrl: string;
      request: {
        method: 'POST' | 'PUT' | 'GET';
        url: string;
      };
      resource: CareTeamRequest;
    }?,
  ];
};
