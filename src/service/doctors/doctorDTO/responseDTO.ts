import {
  AddressObject,
  AvailableTimeObject,
  CodingConcept,
  ContactObject,
  DomainResource,
  IdentifierObject,
  NameObject,
  Participant,
  Reference,
  ResponseTransaction,
} from '../fhirType';

export type PractitionerResponse = DomainResource & {
  identifier: Array<IdentifierObject>;
  active: boolean;
  name: Array<NameObject>;
  telecom: Array<ContactObject>;
  address: AddressObject;
};

export type PractitionerRoleResponse = DomainResource & {
  identifier: Array<IdentifierObject>;
  active: boolean;
  practitioner: Reference;
  specialty: Array<CodingConcept>;
  telecom?: Array<ContactObject>;
  availableTime: Array<AvailableTimeObject>;
};

export type CareTeamResponse = DomainResource & {
  identifier: Array<IdentifierObject>;
  status: string;
  category: Array<CodingConcept>;
  subject: Reference;
  participant: Array<Participant>;
};

export type DoctorTransactionResponse = {
  resourceType: string;
  type: string;
  entry: [
    {
      resource: PractitionerResponse;
      response: ResponseTransaction;
    },
    {
      resource: PractitionerRoleResponse;
      response: ResponseTransaction;
    },
    (
      | {
          resource: CareTeamResponse;
          response: ResponseTransaction;
        }
      | undefined
    ),
  ];
};
