<!-- @license CC0-1.0 -->

# MijnZaken - ZaakDetail inhoud

Deze documentatie dient voor de detailpagina van een zaak binnen MijnOmgeving, waarin een gebruiker de status, details, documenten en contactmomenten van één specifieke zaak kan inzien.

## GitHub Discussions

Keuzes, relevante onderzoeken en linkjes naar Figma worden vastgelegd in GitHub Discussions.
Voor Mijn Omgevingen zijn er bij NL Design System [meerdere discussies](https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen) waar leden van de community feedback achter kunnen laten.
Hierdoor hebben we alle kennis gevangen op een plek, en kunnen we gezamenlijk verder bouwen aan één overheidsbeleving.

### Relevante discussies voor MijnZaken - ZaakDetail inhoud

- [Detail- en Subpagina - Zaak](https://github.com/orgs/nl-design-system/discussions/396)

## Gebruikte componenten

Voor dit patroon zijn de volgende componenten in de template gebruikt (oktober 2026):

| Component                                                                                     | Gebruikte implementatie                                                                                              | Issue                                                                                 |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Heading](https://nldesignsystem.nl/heading/)                                                 | Candidate                                                                                                            | [Heading #544](https://github.com/nl-design-system/mijn-services/issues/544)          |
| [Task Navigation (mogelijk binnenkort Task Card)](https://nldesignsystem.nl/task-navigation/) | [Den Haag Action Multiple](https://nl-design-system.github.io/denhaag/?path=/docs/components-actionmultiple--docs)   | [Task Navigation #404](https://github.com/nl-design-system/mijn-services/issues/404)  |
| [Progress List](https://nldesignsystem.nl/progress-list/)                                     | [Den Haag Process Steps](https://nl-design-system.github.io/denhaag/?path=/docs/components-processsteps--docs)       | [Progress List #402](https://github.com/nl-design-system/mijn-services/issues/402)    |
| [Data Summary](https://nldesignsystem.nl/data-summary/)                                       | [Den Haag Description List](https://nl-design-system.github.io/denhaag/?path=/docs/components-descriptionlist--docs) | [Description List #468](https://github.com/nl-design-system/mijn-services/issues/468) |
| [File](https://nldesignsystem.nl/file/)                                                       | [Den Haag File](https://nl-design-system.github.io/denhaag/?path=/docs/components-file--docs)                        | [File #400](https://github.com/nl-design-system/mijn-services/issues/400)             |
| [Contact Timeline](https://nldesignsystem.nl/contact-timeline/)                               | [Den Haag Contact Timeline](https://nl-design-system.github.io/denhaag/?path=/docs/components-contacttimeline--docs) | [Contact Timeline #403](https://github.com/nl-design-system/mijn-services/issues/403) |

- De Den Haag Process Steps wordt mogelijk vervangen door de Progress List die nu in ontwikkeling is
- Description List issue wordt waarschijnlijk omgezet naar Data Summary of Data List (naamswijziging)

## Gebruikte MijnServices APIs

Voor dit patroon zijn de volgende API's gebruikt (oktober 2026):

- Zaken API 1.5.1 [(specificatie)](https://github.com/nl-design-system/mijn-services/blob/main/packages/storybook/src/api/zaken/vendor/openapi.yaml)

De Documenten API (voor bestandsgrootte, type en download-link) is nog niet gekoppeld.
De contactmomenten en de actie bovenaan de pagina zijn nog niet gekoppeld aan een API en bevatten vaste voorbeelddata.

### Endpoints

Deze template haalt data op via drie endpoints van de Zaken API. De tabel laat zien welk onderdeel van de pagina uit welke endpoint komt en welke velden daarvoor gebruikt worden. Zo zie je welke API calls nodig zijn om de pagina te vullen, en welke onderdelen geraakt worden als een API verandert.

| Onderdeel op de pagina | Endpoint                                      | Gebruikte velden                                                               |
| ---------------------- | --------------------------------------------- | ------------------------------------------------------------------------------ |
| Titel en Details       | `GET /zaken/{uuid}`                           | `omschrijving`, `identificatie`, `registratiedatum`, `startdatum`, `einddatum` |
| Status                 | `GET /statussen?zaak={zaak-url}`              | `statustoelichting`, `datumStatusGezet`, `indicatieLaatstGezetteStatus`        |
| Documenten             | `GET /zaakinformatieobjecten?zaak={zaak-url}` | `titel`, `registratiedatum`, `informatieobject`                                |

### Voorbeeld response

Let op: voorbeelddata, ingekort tot de velden die deze pagina gebruikt.

**Zaak** (`GET /zaken/{uuid}`)

```json
{
  "url": "https://zaken.example.com/api/v1/zaken/8c3fdb0c-9e40-4b8d-a64a-f0b41d5d6f01",
  "uuid": "8c3fdb0c-9e40-4b8d-a64a-f0b41d5d6f01",
  "identificatie": "ZK-29124",
  "omschrijving": "Aanvraag subsidie geluidsisolatie",
  "registratiedatum": "2025-03-16",
  "startdatum": "2025-03-16",
  "einddatum": null
}
```
