# Specs

> **⚠️ Experiment (POC).**

De specs beschrijven per bouwsteen wat een inwoner in de MijnOmgeving ziet
en kan, in gewone taal en met concrete voorbeelden. Ze zitten tussen de
[MijnServices-documentatie van VNG](https://github.com/VNG-Realisatie/mijn-services-documentatie)
en de templates in: ze verwijzen naar de API's voor de data en naar de
templates in Storybook voor de uitvoering.

De specs beschrijven per bouwsteen wat een inwoner in de MijnOmgeving ziet
en kan, in gewone taal en met concrete voorbeelden. Ze vormen de vertaalslag
van de bedoeling uit service blueprints en de bouwstenen naar de uitvoering in
UI en UX, en verwijzen naar onder andere de volgende bronnen:

- de [MijnServices-documentatie van VNG](https://github.com/VNG-Realisatie/mijn-services-documentatie)
  voor bouwstenen, use cases en aansluitprofielen
- de API's voor de data
- Figma voor het ontwerp
- GitHub Discussions voor afwegingen en besluiten
- gebruikersonderzoeken.nl
- de templates in Storybook voor de uitvoering
- service blueprints

## Waarom

Informatie over MijnServices staat verspreid over GitHub Discussions,
MijnMijnMijn Miro, MijnServices check-ins notities, Slack, Figma, Storybook templates, API's etc. Deze specs brengen de uitkomsten samen op één plek, met verwijzingen naar waar ze vandaan komen. Zo helpen ze om:

- per situatie concreet te maken wat de inwoner ziet, als aanvulling op de
  use cases, aansluitprofielen en schermprofielen van VNG.
- de bedoeling uit service designs te waarborgen.
- onderzoek en besluiten te bewaren.
- portalen te ondersteunen bij implementatie.
- te zien welke informatie de API's leveren en wat ontbreekt.
- toegankelijkheid vanaf het begin mee te nemen.
- AI gericht in te kunnen zetten, met mensen die het resultaat valideren.

## Opbouw

Eén `.feature`-bestand per bouwsteen, bijvoorbeeld `mijn-zaken.feature`,
in Nederlandse Gherkin (`# language: nl`).

## Tags

**Status**, precies één per scenario:

| Tag            | Betekenis                              |
| -------------- | -------------------------------------- |
| `@open`        | Onduidelijk of in discussie            |
| `@hypothese`   | Concreet beschreven, nog niet getoetst |
| `@gevalideerd` | Getoetst en bevestigd, met bron        |

**Pagina**, waar het scenario voorkomt, bijvoorbeeld `@zaakdetail`.

## Afspraken

- Stappen: `Stel` (beginsituatie), `Wanneer` (actie), `Dan` (resultaat)
- Schrijf vanuit de inwoner, zonder technische termen
- Vermeld onder elk scenario de bron (`Bron:`), en bij `@open` de vraag
  (`Vraag:`) en wat elke bron erover zegt (`Template:`, `Figma:`, ...)
- Eerst de gewone situatie, dan randgevallen
- Inspringen met 2 spaties
