import type { PaginatedZaakList, Status, Zaak, ZaakInformatieObject } from './view-model';

const apiBaseUrl = 'https://zaken.example.test/api/v1';
const catalogiBaseUrl = 'https://catalogi.example.test/api/v1';
const documentenBaseUrl = 'https://documenten.example.test/api/v1';

type ZaakFixture = {
  einddatum?: string | null;
  identificatie: string;
  omschrijving: string;
  registratiedatum: string;
  uuid: string;
};

function zaakUrl(uuid: string): string {
  return `${apiBaseUrl}/zaken/${uuid}`;
}

function statusUrl(uuid: string): string {
  return `${apiBaseUrl}/statussen/${uuid}`;
}

function createZaak({ einddatum = null, identificatie, omschrijving, registratiedatum, uuid }: ZaakFixture): Zaak {
  return {
    url: zaakUrl(uuid),
    uuid,
    identificatie,
    bronorganisatie: '123456782',
    omschrijving,
    toelichting: `Zaak voor ${omschrijving.toLowerCase()}.`,
    zaaktype: `${catalogiBaseUrl}/zaaktypen/${uuid}`,
    registratiedatum,
    verantwoordelijkeOrganisatie: '123456782',
    startdatum: registratiedatum,
    einddatum,
    einddatumGepland: einddatum ?? '2025-11-17',
    uiterlijkeEinddatumAfdoening: einddatum ?? '2025-12-01',
    productenOfDiensten: [`${catalogiBaseUrl}/producten-diensten/${uuid}`],
    vertrouwelijkheidaanduiding: 'openbaar',
    betalingsindicatie: 'nvt',
    betalingsindicatieWeergave: 'Niet van toepassing',
    hoofdzaak: null,
    deelzaken: [],
    eigenschappen: [],
    rollen: [],
    status: statusUrl(uuid),
    zaakinformatieobjecten: [],
    zaakobjecten: [],
    kenmerken: [{ kenmerk: identificatie, bron: 'Zaken API POC' }],
    archiefstatus: einddatum === null ? 'nog_te_archiveren' : 'gearchiveerd',
    archiefactiedatum: einddatum === null ? null : '2032-12-31',
    resultaat: einddatum === null ? null : `${apiBaseUrl}/resultaten/${uuid}`,
  };
}

const zaken = [
  createZaak({
    uuid: '8c3fdb0c-9e40-4b8d-a64a-f0b41d5d6f01',
    identificatie: 'ZK-29124',
    omschrijving: 'Aanvraag subsidie geluidsisolatie',
    registratiedatum: '2025-03-16',
  }),
  createZaak({
    uuid: '0a42e39f-3987-4a9d-8a3f-47b8ac39c5f1',
    identificatie: 'ZK-02599',
    omschrijving: 'Aanvraag parkeervergunning',
    registratiedatum: '2025-01-14',
  }),
  createZaak({
    uuid: 'a54b5996-a6c1-4e1c-a53a-548044655bd0',
    identificatie: 'ZK-02612',
    omschrijving: 'Melding openbare ruimte',
    registratiedatum: '2024-12-18',
  }),
  createZaak({
    uuid: '922dd19e-8601-43d0-9f47-4f92c8e48079',
    identificatie: 'ZK-02724',
    omschrijving: 'Aanvraag woningaanpassing',
    registratiedatum: '2024-11-29',
  }),
  createZaak({
    uuid: '9372cb06-f27a-46d4-905f-dbc80bbd080b',
    identificatie: 'ZK-02725',
    omschrijving: 'Aanvraag bijzondere bijstand',
    registratiedatum: '2024-10-02',
  }),
  createZaak({
    uuid: '70be2166-36d7-4111-ac0f-b4dc4df6ecdc',
    identificatie: 'ZK-02791',
    omschrijving: 'Aanvraag uittreksel basisregistratie personen',
    registratiedatum: '2024-09-13',
  }),
  createZaak({
    uuid: '3954128e-5d31-4c1a-9a0e-828746841840',
    identificatie: 'ZK-02875',
    omschrijving: 'Aanvraag naamsbepaling',
    registratiedatum: '2024-08-22',
  }),
  createZaak({
    uuid: '0370fb3b-c0f9-4fdd-bbcf-4656cad9e3f4',
    identificatie: 'ZK-02973',
    omschrijving: 'Bezwaar bestemmingsplan',
    registratiedatum: '2024-07-15',
  }),
  createZaak({
    uuid: '17fb0617-743f-4898-8cbb-a6b9230d24d6',
    identificatie: 'ZK-03001',
    omschrijving: 'Melding overlast buren',
    registratiedatum: '2024-06-13',
  }),
  createZaak({
    uuid: '520fe998-033b-46b2-a82c-af22145f587f',
    identificatie: 'ZK-03154',
    omschrijving: 'Aanvraag gehandicaptenparkeerkaart',
    registratiedatum: '2024-05-07',
  }),
  createZaak({
    uuid: '41857a3d-d10f-45b0-979c-263131e3d4a0',
    identificatie: 'ZK-00122',
    omschrijving: 'Bezwaar tegen WOZ-waarde',
    registratiedatum: '2023-04-21',
    einddatum: '2023-08-30',
  }),
  createZaak({
    uuid: '59434199-d6d0-4cab-99c7-ec03fd0c5565',
    identificatie: 'ZK-99084',
    omschrijving: 'Aanvraag paspoort',
    registratiedatum: '2023-01-11',
    einddatum: '2023-01-27',
  }),
];

export const zakenApiResponse = {
  count: zaken.length,
  next: null,
  previous: null,
  results: zaken,
} satisfies PaginatedZaakList;

export const zaakDetail = zaken[0];

export const zaakDetailStatussen = [
  {
    url: statusUrl('93f28ccb-201c-4428-a1f9-bf6b131a3f88'),
    uuid: '93f28ccb-201c-4428-a1f9-bf6b131a3f88',
    zaak: zaakDetail.url,
    statustype: `${catalogiBaseUrl}/statustypen/93f28ccb-201c-4428-a1f9-bf6b131a3f88`,
    datumStatusGezet: '2024-10-17T10:12:00Z',
    statustoelichting: 'Aanvraag ontvangen',
    indicatieLaatstGezetteStatus: false,
    zaakinformatieobjecten: [],
  },
  {
    url: statusUrl('32749444-b7cd-42eb-9baf-95e59384edb3'),
    uuid: '32749444-b7cd-42eb-9baf-95e59384edb3',
    zaak: zaakDetail.url,
    statustype: `${catalogiBaseUrl}/statustypen/32749444-b7cd-42eb-9baf-95e59384edb3`,
    datumStatusGezet: '2024-10-24T14:30:00Z',
    statustoelichting: 'Aanvraag in behandeling',
    indicatieLaatstGezetteStatus: false,
    zaakinformatieobjecten: [],
  },
  {
    url: statusUrl('6966bdb9-67a5-4c96-96df-e99e6c0c9ef1'),
    uuid: '6966bdb9-67a5-4c96-96df-e99e6c0c9ef1',
    zaak: zaakDetail.url,
    statustype: `${catalogiBaseUrl}/statustypen/6966bdb9-67a5-4c96-96df-e99e6c0c9ef1`,
    datumStatusGezet: '2024-11-12T09:00:00Z',
    statustoelichting: 'Onderzoek gestart',
    indicatieLaatstGezetteStatus: true,
    zaakinformatieobjecten: [],
  },
] satisfies Status[];

export const zaakDetailInformatieObjecten = [
  {
    url: `${apiBaseUrl}/zaakinformatieobjecten/f6985858-92f9-4358-ae18-483c8220de44`,
    uuid: 'f6985858-92f9-4358-ae18-483c8220de44',
    informatieobject: `${documentenBaseUrl}/enkelvoudiginformatieobjecten/e6f0d352-5f81-4f2f-8f2f-48fe3e93a3d0`,
    zaak: zaakDetail.url,
    aardRelatieWeergave: 'Hoort bij, omgekeerd: kent',
    titel: 'antwoord-formulier-deelname-onderzoek',
    beschrijving: 'Antwoordformulier voor deelname aan geluidsonderzoek',
    registratiedatum: '2024-10-17T10:13:00Z',
    vernietigingsdatum: null,
    status: zaakDetailStatussen[0].url,
  },
] satisfies ZaakInformatieObject[];
