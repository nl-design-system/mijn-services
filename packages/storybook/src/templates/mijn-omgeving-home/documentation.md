# MijnOmgeving - Overzichtspagina inhoud

Deze documentatie dient voor de overzichtspagina van een MijnOmgeving pagina.

## Github Discussions

Keuzes, relevante onderzoeken en linkjes naar Figma worden vastgelegd in Github Discussions.
Voor Mijn Omgevingen zijn er bij NL Design
System [meerdere discussies](https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen) waar leden
van de community feedback achter kunnen laten.
Hierdoor hebben we alle kennis gevangen op een plek, en kunnen we gezamelijk verder bouwen aan één overheidsbeleving.

### Relevante discussies voor Overzichtspagina inhoud

- [Overzichtspagina](https://github.com/orgs/nl-design-system/discussions/392)
- [Objectweergave](https://github.com/orgs/nl-design-system/discussions/387)

## Gebruikte componenten

### Pagina layout & Navigatie

De pagina layout en navigatie maakt gebruik van de [Basis Layout](/story/mijn-omgeving-basis--default). Refereer naar
de [documentatie](/docs/templates-mijn-omgeving-basis-documentatie--docs) van de basis layout voor meer informatie over
die componenten.

### Patronen

| Patroon naam | Patroon variant | Documentatie            |
| ------------ | --------------- | ----------------------- |
| MijnTaken    | Overzicht       | Nog niet gedocumenteerd |
| MijnZaken    | Overzicht       | Nog niet gedocumenteerd |

## Gebruikte MijnServices APIs

Voor dit patroon zijn de volgende API's gebruikt:

- Zaken API 1.5.1 [(specificatie)](https://dienstverleningsplatform.gitbook.io/platform-generieke-dienstverlening-public/standaarden/zaakgericht-werken)

### Voorbeeld response

```json
{
  "url": "http://example.com",
  "uuid": "095be615-a8ad-4c33-8e9c-c7612fbf6c9f",
  "identificatie": "string",
  "bronorganisatie": "string",
  "omschrijving": "string",
  "toelichting": "string",
  "zaaktype": "http://example.com",
  "registratiedatum": "2019-08-24",
  "verantwoordelijkeOrganisatie": "string",
  "startdatum": "2019-08-24",
  "einddatum": "2019-08-24",
  "einddatumGepland": "2019-08-24"
}
```
