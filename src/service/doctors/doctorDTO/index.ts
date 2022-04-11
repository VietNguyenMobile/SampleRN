// import api from 'helpers/api';
import API_URL, {IDENTIFIER} from '../../URL';
import {ResourceType} from './enum';
import {Doctor, DoctorMappingData} from '../model-doctor';
import {
  CareTeamRequest,
  DoctorTransactionRequest,
  PractitionerRequest,
  PractitionerRoleRequest,
} from './requestDTO';
import {
  AddressObject,
  Attachment,
  Coding,
  CodingConcept,
  ContactObject,
  ContactUse,
  PatientResource,
  PractitionerListResponse,
  PractitionerRoleResource,
} from '../fhirType';
import {
  DoctorTransactionResponse,
} from './responseDTO';

import {UserPhoto} from '../patient';

const PATIENT_DOCTOR_IDENTIFIER = {
  system: IDENTIFIER.SYSTEM,
  value: IDENTIFIER.PATIENT_DOCTOR,
};

const PATIENT_DOCTOR_CODING: Coding = {
  system: IDENTIFIER.SYSTEM,
  code: IDENTIFIER.PATIENT_DOCTOR,
  display: '',
};

const PARTICIPANT_RELATIONSHIP = {
  Doctor: 'doctor',
};

export const createPractitioner = (
  doctor: Doctor,
  isUpdate: boolean = false,
) => {
  const phoneList: Array<ContactObject> = doctor.phoneList.map((item) => {
    const contact: ContactObject = {
      system: 'phone', // "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other"
      value: item.numberString,
      use: (item.type.toLowerCase() as ContactUse) || 'work', // "home" | "work" | "temp" | "old" | "mobile"
    };
    return contact;
  });

  phoneList.push({
    system: 'email',
    value: (doctor.email && doctor.email.trim()) || '',
    use: 'work',
  });

  const addressList: Array<AddressObject> = doctor.addresses.map((item) => {
    return {
      use: 'work',
      line: [item.street.trim()],
      city: item.city,
      state: item.state,
      postalCode: item.postal.trim(),
      text: item.label,
      country: item.country || 'US',
    };
  });

  const note = doctor.note && doctor.note.trim();

  const photoObject: Attachment | null =
    (doctor.avatar && {
      contentType: 'image/jpeg',
      url:
        true && doctor.avatar.uri
          ? doctor.avatar.uri
          : (doctor.avatar as UserPhoto).url,
    }) ||
    null;

  const body: PractitionerRequest = {
    resourceType: ResourceType.PRACTITIONER,
    identifier: [PATIENT_DOCTOR_IDENTIFIER],
    active: true,
    name: [
      {
        family: doctor.lastName,
        given: [doctor.firstName],
        prefix: [],
      },
    ],
    telecom: phoneList,
    address: addressList,
    text: {
      div: (note && `<div>${note}</div>`) || undefined,
    },
    photo: (photoObject && [photoObject]) || [],
  };
  console.log('Practitioner Body: ', JSON.stringify(body));
  if (isUpdate) {
    body.id = doctor.id
  }
  return body;
};

export const createPractitionerRole = (
  practitionerID: string,
  doctor: Doctor,
  isUpdate: boolean = false,
) => {
  const specialtyData: Array<CodingConcept> = doctor.specialty.map((item) => {
    return {
      coding: [
        {
          system: IDENTIFIER.SYSTEM,
          code: IDENTIFIER.CUSTOM_SPECIALTY,
          display: item.name,
        },
      ],
    };
  });

  const body: PractitionerRoleRequest = {
    resourceType: ResourceType.PRACTITIONER_ROLE,
    identifier: [
      {
        system: IDENTIFIER.SYSTEM,
        value: IDENTIFIER.PATIENT_DOCTOR_ROLE,
      },
    ],
    active: true,
    practitioner: {
      reference: isUpdate
        ? `Practitioner/${doctor.id}`
        : `${practitionerID}`,
      // display: ''
    },
    specialty: specialtyData,
    availableTime: [
      {
        daysOfWeek: ['mon'],
        availableStartTime: '09:00:00',
        availableEndTime: '17:30:00',
      },
    ],
  };
  console.log('Practitioner Role Body: ', JSON.stringify(body));
  if (isUpdate) {
    body.id = doctor.roleId
  }
  return body;
};

export const createCareTeam = (
  patientID: string,
  practitionerRoleId: string,
) => {
  const body: CareTeamRequest = {
    resourceType: ResourceType.CARE_TEAM,
    identifier: [
      {
        system: IDENTIFIER.SYSTEM,
        value: IDENTIFIER.PATIENT_CARE_TEAM,
      },
    ],
    status: 'active',
    category: [
      {
        coding: [PATIENT_DOCTOR_CODING],
      },
    ],
    name: '',
    subject: {
      reference: `Patient/${patientID}`
      // reference: `Patient?identifier=https://fluidity-health.com|${patientID}`,
    },
    participant: [
      {
        role: [
          {
            text: PARTICIPANT_RELATIONSHIP.Doctor,
          },
        ],
        member: {
          // reference: `PractitionerRole/${practitionerRoleId}`,
          reference: `${practitionerRoleId}`,
        },
      },
    ],
  };
  console.log('Care Team Body: ', JSON.stringify(body));
  return body;
};

export const getListDoctorByUserId = async (
  patientID: string,
  ignoreLoading: boolean = false,
  linkNexPage: string | null = null,
) => {
  const url =
    linkNexPage ||
    `${API_URL.FIHIR_URL}/${API_URL.GET_LIST_DOCTOR_BY_PATIENT_ID}`
      .replace('[patientID]', patientID)
      .replace('[identifierType]', IDENTIFIER.PATIENT_DOCTOR);

  const listDoctor = await api.get<PractitionerListResponse>(
    url,
    undefined,
    undefined,
    {needAuthorizedToken: true, ignoreLoading},
  );

  // const listRawData = (listDoctor.entry && listDoctor.entry.sort((a, b) => sortDoctorType(a))) || [];
  const listRawData = []
  const list = [];
  for (let index = 0; index < listRawData.length; index += 1) {
    let practitionerElement = listRawData[index] as PatientResource;
    let practitionerRoleElement = listRawData[
      index + 1
    ] as PractitionerRoleResource;
    let itemIndex = -1;
    if (true) {
      practitionerElement = listRawData[index] as PatientResource;
      itemIndex = listRawData.findIndex(
        (l) =>
          l.resource.resourceType === ResourceType.PRACTITIONER_ROLE &&
          l.resource.practitioner.reference ===
            `Practitioner/${practitionerElement.resource.id}`,
      );
      if (itemIndex <= -1) {
        break;
      }
      practitionerRoleElement = listRawData[
        itemIndex
      ] as PractitionerRoleResource;
    } else {
      practitionerRoleElement = listRawData[index] as PractitionerRoleResource;
      const practitionerId = practitionerElement.resource.practitioner.reference.replace(
        'Practitioner/',
        '',
      );
      itemIndex = listRawData.findIndex(
        (l) =>
          l.resource.resourceType === ResourceType.PRACTITIONER &&
          l.resource.id === practitionerId,
      );
      if (itemIndex <= -1) {
        break;
      }
      practitionerElement = listRawData[itemIndex] as PatientResource;
    }

    const doctor = DoctorMappingData(
      practitionerElement,
      practitionerRoleElement,
      practitionerRoleElement.resource.id,
    );
    list.push(doctor);
    listRawData.splice(itemIndex, 1);
  }

  const link = listDoctor.link.find((l) => l.relation === 'next');

  return {
    doctorList: list,
    doctorNextPage: (link && link.url) || null,
  };
};

export const createDoctor = async (
  patientID: string,
  doctor: Doctor,
  isUpdate: boolean = false,
) => {
  const url = `${API_URL.FIHIR_URL}/${API_URL.FHIR_PROXY}`;
  const practitionerIDTemp = 'urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a';
  const practitionerRoleIDTemp =
    'urn:uuid:9d2a6173-b207-433b-bb7b-0fe13e944e9a';
  const careTeamIDTemp = 'urn:uuid:88f151c0-a954-468a-88bd-5ae15c08e059';

  const practitionerRequest: PractitionerRequest = createPractitioner(
    doctor,
    isUpdate,
  );
  const practitionerRoleRequest: PractitionerRoleRequest = createPractitionerRole(
    practitionerIDTemp,
    doctor,
    isUpdate,
  );

  const body: DoctorTransactionRequest = {
    resourceType: ResourceType.BUNDLE,
    type: 'transaction',
    entry: isUpdate
      ? [
          {
            fullUrl: practitionerIDTemp,
            resource: practitionerRequest,
            request: {
              method: 'PUT',
              url: `Practitioner/${doctor.id}`,
            },
          },
          {
            fullUrl: practitionerRoleIDTemp,
            resource: practitionerRoleRequest,
            request: {
              method: 'PUT',
              url: `PractitionerRole/${doctor.roleId}`,
            },
          },
        ]
      : [
          {
            fullUrl: practitionerIDTemp,
            resource: practitionerRequest,
            request: {
              method: 'POST',
              url: 'Practitioner',
            },
          },
          {
            fullUrl: practitionerRoleIDTemp,
            resource: practitionerRoleRequest,
            request: {
              method: 'POST',
              url: 'PractitionerRole',
            },
          },
          {
            fullUrl: careTeamIDTemp,
            resource: createCareTeam(patientID, practitionerRoleIDTemp),
            request: {
              method: 'POST',
              url: 'CareTeam',
            },
          },
        ],
  };

  console.log('DOCTOR REQUEST BODY: ', JSON.stringify(body));
  
  const practitioner = await api.post<DoctorTransactionResponse>(
    url,
    body,
    undefined,
    {needAuthorizedToken: true},
  );
  const practitionerEntry = practitioner.entry.find(
    (e) => e && e.resource.resourceType === ResourceType.PRACTITIONER,
  );
  const newDoctor: Doctor = {
    ...doctor,
    id: (practitionerEntry && practitionerEntry.resource.id) || '',
  };
  return newDoctor;
};
