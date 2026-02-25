export const storybookPaths = {
  basis: '?path=/story/mijn-omgeving-basis--default',
  overzicht: '?path=/story/mijn-omgeving-1--default',
  taken: '?path=/story/mijn-omgeving-taken--default',
  berichtenOverzicht: '?path=/story/mijn-omgeving-berichten-overzicht--default',
  berichtDetail: '?path=/story/mijn-omgeving-mijnberichten-detailpagina--default',
  zakenOverzicht: '?path=/story/mijn-omgeving-mijnzaken-overzicht--default',
  zaakDetail: '?path=/story/mijn-omgeving-mijnzaken-detailpagina--default',
  mijnGegevens: '?path=/story/mijn-profiel-1--default',
} as const;

export const websitePaths = {
  overzicht: '/templates/mijn-omgeving-home',
  taken: '/templates/mijn-omgeving-taken-overzicht',
  berichtenOverzicht: '/templates/mijn-omgeving-berichten-overzicht',
  berichtDetail: '/templates/mijn-omgeving-berichtdetail',
  zakenOverzicht: '/templates/mijn-omgeving-zaken-overzicht',
  zaakDetail: '/templates/mijn-omgeving-zaakdetail',
  mijnGegevens: '/templates/mijn-omgeving-gegevens-overzicht',
} as const;

export type MijnOmgevingPaths = {
  basis?: string;
  overzicht: string;
  taken: string;
  berichtenOverzicht: string;
  berichtDetail: string;
  zakenOverzicht: string;
  zaakDetail: string;
  mijnGegevens: string;
};
