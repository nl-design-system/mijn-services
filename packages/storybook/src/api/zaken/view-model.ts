import type { PaginatedZaakList, Status, Zaak, ZaakInformatieObject } from './openapi-types';

export type { PaginatedZaakList, Status, Zaak, ZaakInformatieObject } from './openapi-types';

export type ZaakOverviewItem = {
  href: string;
  id: string;
  identificatie: string;
  isOpen: boolean;
  requestDate: string;
  statusLabel: string;
  title: string;
};

export function getZaken(response: PaginatedZaakList): Zaak[] {
  return response.results ?? [];
}

export function getZaakTitle(zaak: Zaak): string {
  return zaak.omschrijving ?? zaak.identificatie ?? zaak.uuid;
}

export function getZaakIdentificatie(zaak: Zaak): string {
  return zaak.identificatie ?? zaak.uuid;
}

export function isOpenZaak(zaak: Zaak): boolean {
  return zaak.einddatum === null;
}

export function mapZaakToOverviewItem(zaak: Zaak, href: string): ZaakOverviewItem {
  return {
    href,
    id: zaak.uuid,
    identificatie: getZaakIdentificatie(zaak),
    isOpen: isOpenZaak(zaak),
    requestDate: formatDate(zaak.registratiedatum ?? zaak.startdatum),
    statusLabel: getStatusLabel(zaak),
    title: getZaakTitle(zaak),
  };
}

export function mapZakenToOverviewItems(response: PaginatedZaakList, href: string): ZaakOverviewItem[] {
  return getZaken(response).map((zaak) => mapZaakToOverviewItem(zaak, href));
}

export function getOpenZaken(response: PaginatedZaakList): Zaak[] {
  return getZaken(response).filter(isOpenZaak);
}

export function getClosedZaken(response: PaginatedZaakList): Zaak[] {
  return getZaken(response).filter((zaak) => !isOpenZaak(zaak));
}

export function getStatusLabel(zaak: Zaak): string {
  return isOpenZaak(zaak) ? 'Open' : 'Gesloten';
}

export function getZakenCount(response: PaginatedZaakList): number {
  return response.count ?? getZaken(response).length;
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));
}

export function formatLongDate(date: string): string {
  return new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export function sortStatuses(statussen: Status[]): Status[] {
  return [...statussen].sort(
    (first, second) => new Date(first.datumStatusGezet).getTime() - new Date(second.datumStatusGezet).getTime(),
  );
}

export function mapStatusesToSteps(statussen: Status[]) {
  const sortedStatuses = sortStatuses(statussen);

  return sortedStatuses.map((status, index) => ({
    id: status.uuid,
    marker: index + 1,
    status: status.indicatieLaatstGezetteStatus ? ('current' as const) : ('checked' as const),
    title: status.statustoelichting ?? `Status gezet op ${formatDate(status.datumStatusGezet)}`,
  }));
}

export function getDocumentTitle(document: ZaakInformatieObject): string {
  return document.titel ?? document.beschrijving ?? document.informatieobject;
}
