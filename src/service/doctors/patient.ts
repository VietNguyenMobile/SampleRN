import { Attachment, ContactObject, NameObject, PatientResource, PatientSingleResource, RelationShipContact } from "services/fhirType";
import { AddressMappingFromFHIRResponse, DoctorAddress } from "./model-doctor";


export type UserPhoto = {
  url: string;
  fileName: string;
};

export type ResponsibleParty = {
  id: string,
  relationship: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export type PatientRole = 'Patient' | 'CareMember';

export enum SyncDevice {
  SyncDevice = 'SyncDevice'
}

export type PatientUser = {
  id: string;
  userPhoto: string | null;
  role: PatientRole;
  displayName: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  weight: string;
  height: string;
  phoneNumber: string;
  email: string;
  addresses: Array<DoctorAddress>;
  responsibleParties: Array<ResponsibleParty>;
  deviceId?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: string;
  updatedAt?: string;
  refId?: string;
  isDeleted?: boolean;
  patientRefId?: string;
};

export const NameMappingData = (listName: Array<NameObject>) => {
  if (listName.length <= 0) {
    return null
  }
  const nameObject = listName[0];

  return {
    displayName: nameObject.text || '',
    firstName: nameObject.given[0],
    middleName: nameObject.given.slice(1, nameObject.given.length),
    lastName: nameObject.family,
  }
}

export const PhoneOrEmailMappingData = (listPhone: Array<ContactObject>, type: 'email' | 'phone') => {
  if (listPhone.length <= 0) {
    return ''
  }
  const contactObject = listPhone.filter((p) => p.system === type);

  return contactObject.length > 0 && contactObject[0].value || ''
}

export const ResponsibleMappingData = (listContact: Array<RelationShipContact>) => {
  if (listContact.length <= 0) {
    return []
  }

  const list = []

  for (let index = 0; index < listContact.length; index++) {
    const r = listContact[index];
    if (r.relationship.length > 0 && r.relationship[0].coding && r.relationship[0].coding.length > 0) {
      const phone = r.telecom.filter(t => t.system === 'phone')
      const newItem: ResponsibleParty = {
        id: String(index),
        relationship: r.relationship[0].coding[0].display || '',
        firstName: r.name.given.join(' '),
        lastName: r.name.family,
        gender: r.gender,
        phone: phone.length > 0 && phone[0].value || '',
        address: r.address
      }
      list.push(newItem)
    }
  }

  return list;
}


export const PatientMappingData = (list: Array<PatientResource>) => {
  return list.map((l) => {
    const photo = l.resource.photo && UserPhotoMappingData(l.resource.photo) || null
    const { displayName, firstName, lastName } = l.resource.name && NameMappingData(l.resource.name) || {
      displayName: '',
      firstName: '',
      middleName: [],
      lastName: '',
    }

    return {
      id: l.resource.id,
      userPhoto: photo,
      displayName,
      firstName,
      lastName,
      dateOfBirth: l.resource.birthDate || '',
      gender: l.resource.gender,
      weight: '',
      height: '',
      phoneNumber: l.resource.telecom && PhoneOrEmailMappingData(l.resource.telecom, 'phone') || '',
      email: l.resource.telecom && PhoneOrEmailMappingData(l.resource.telecom, 'email') || '',
      addresses: l.resource.address && AddressMappingFromFHIRResponse(l.resource.address) || [],
      responsibleParties: l.resource.contact && ResponsibleMappingData(l.resource.contact) || [],
    }
  })
}

export const PatientMappingSingleData = (resource: PatientSingleResource): PatientUser => {
  const photo = resource.photo && UserPhotoMappingData(resource.photo) || null
  const { displayName, firstName, lastName } = resource.name && NameMappingData(resource.name) || {
    displayName: '',
    firstName: '',
    middleName: [],
    lastName: '',
  }

  return {
    id: resource.id,
    userPhoto: photo,
    displayName,
    firstName,
    lastName,
    dateOfBirth: resource.birthDate || '',
    gender: resource.gender,
    weight: '',
    height: '',
    phoneNumber: resource.telecom && PhoneOrEmailMappingData(resource.telecom, 'phone') || '',
    email: resource.telecom && PhoneOrEmailMappingData(resource.telecom, 'email') || '',
    addresses: resource.address && AddressMappingFromFHIRResponse(resource.address) || [],
    responsibleParties: resource.contact && ResponsibleMappingData(resource.contact) || [],
    role: 'Patient',
  }
}

export const UserPhotoMappingData = (listAttachment: Array<Attachment>) => {
  if (listAttachment.length <= 0) {
    return null
  }
  const photo: UserPhoto = {
    url: listAttachment[0].url,
    fileName: listAttachment[0].url
  }

  return photo
}