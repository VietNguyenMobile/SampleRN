// import { generateID } from 'helpers/string';

export const generateID = () => {
  return Math.floor(Math.random() * 100)
}

import {
  AddressObject,
  CodingConcept,
  ContactObject,
  Narrative,
  PatientResource,
  PractitionerRoleResource,
} from './fhirType';
import { UserPhotoMappingData } from './patient';

export type Specialty = {
  code: string;
  name: string;
};

export type DoctorAddress = {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  postal: string;
  country: string;
};

export type DoctorPhone = {
  id: string;
  type: string;
  numberString: string;
};

export type Doctor = {
  id: string;
  avatar: string | null;
  firstName: string;
  middleName: Array<string>;
  lastName: string;
  email?: string;
  note?: string;
  specialty: Array<Specialty>;
  addresses: Array<DoctorAddress>;
  phoneList: Array<DoctorPhone>;
  roleId: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
};

export const DoctorMappingData = (
  data: PatientResource,
  roleData: PractitionerRoleResource,
  roleId: string,
): Doctor => {
  const resource = data.resource;
  return {
    id: data.resource.id,
    avatar:
    (data.resource.photo && UserPhotoMappingData(data.resource.photo)) ||
    null,
    firstName: (resource.name && resource.name[0].given[0]) || '',
    middleName:
      (resource.name &&
        resource.name[0].given.slice(1, resource.name[0].given.length)) ||
      [],
    lastName: (resource.name && resource.name[0].family) || '',
    email:
      (data.resource.telecom &&
        EmailMappingFromFHIRResponse(data.resource.telecom)) ||
      '',
    note: data.resource.text && NoteMappingFromFHIRResponse(data.resource.text),
    addresses:
      (data.resource.address &&
        AddressMappingFromFHIRResponse(data.resource.address)) ||
      [],
    phoneList:
      (data.resource.telecom &&
        PhoneListMappingFromFHIRResponse(data.resource.telecom)) ||
      [],
    specialty:
      (roleData.resource.specialty &&
        SpecialtyMappingData(roleData.resource.specialty)) ||
      [],
    roleId,
  };
  // return doctorItem;
};

export const EmailMappingFromFHIRResponse = (
  arrayData: Array<ContactObject>,
) => {
  if (arrayData.length <= 0) {
    return '';
  }
  const emailContact = arrayData.find(c => c.system === 'email');
  return (emailContact && emailContact.value) || '';
};

export const PhoneListMappingFromFHIRResponse = (
  arrayData: Array<ContactObject>,
): Array<DoctorPhone> => {
  if (arrayData.length <= 0) {
    return [];
  }
  const phoneContact = arrayData.filter(c => c.system === 'phone');
  return phoneContact.map(p => {
    return {
      id: `${generateID()}`,
      type: p.use,
      numberString: p.value,
    };
  });
};

export const NoteMappingFromFHIRResponse = (data: Narrative) => {
  if (!data.div) {
    return '';
  }
  return data.div.replace('<div>', '').replace('</div>', '');
};

export const AddressMappingFromFHIRResponse = (
  addresses: Array<AddressObject>,
): Array<DoctorAddress> => {
  return (
    (addresses &&
      addresses.map(a => {
        return {
          id: `${generateID()}`,
          label: a.text,
          street: a.line[0],
          city: a.city,
          state: a.state,
          postal: a.postalCode,
          country: a.country,
        };
      })) ||
    []
  );
};

export const SpecialtyMappingData = (
  specialtyList: Array<CodingConcept>,
): Array<Specialty> => {
  return specialtyList.map(s => {
    return {
      code: `${generateID()}`,
      name: (s.coding && s.coding.length > 0 && s.coding[0].display) || '',
    };
  });
};
