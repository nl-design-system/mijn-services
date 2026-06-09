# MijnOmgeving - MijnZaken Overzicht

Deze documentatie dient voor de MijnZaken overzichtspagina van een MijnOmgeving pagina. De MijnZaken overzichtspagina toont de openstaande en gesloten zaken van een gebruiker.
Afhankelijk van het aantal zaken wordt een andere weergave getoond:

- **Minder dan 10 zaken** → Card view
- **Meer dan 10 zaken** → Table view

## Minder dan 10 zaken (Card view)

De card view is bedoeld voor gebruikers met een beperkt aantal zaken. Elke zaak wordt weergegeven als een kaart met de zaaktitel en het zaaknummer. Open en gesloten zaken zijn gescheiden via tabs.

## Meer dan 10 zaken (Table view)

De table view is bedoeld voor gebruikers met meer dan 10 zaken. De zaken worden weergegeven in een tabel met zoek- en filtermogelijkheden en paginering.

## Zaken API POC

De MijnZaken templates tonen zaakgegevens zoals de titel (`omschrijving`), het zaaknummer (`identificatie`) en of een zaak nog open is (`einddatum`). Die velden komen rechtstreeks uit de Zaken API (versie 1.5.1).

Voor Storybook worden er fixtures gebruikt die de structuur van echte API-responses nabootsen. Die fixtures zijn getypeerd met TypeScript en worden automatisch gevalideerd aan de hand van de OpenAPI-specificatie van de Zaken API. Klopt er iets niet meer, bijvoorbeeld omdat een veldnaam in de API veranderd is, dan faalt de Storybook build. Zo worden type-mismatches vroeg opgepikt.

De labels in deze POC zijn Nederlands. De Zaken API zelf bevat geen vertaalvelden, dus volledig vertaalbare labels vereisen een aanvulling vanuit een backend- of Catalogi-contract — dat is een vervolgstap.

## Github Discussions

Keuzes, relevante onderzoeken en linkjes naar Figma worden vastgelegd in Github Discussions.
Voor Mijn Omgevingen zijn er bij NL Design System [meerdere discussies](https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen) waar leden van de community feedback achter kunnen laten.
Hierdoor hebben we alle kennis gevangen op een plek, en kunnen we gezamenlijk verder bouwen aan één overheidsbeleving.

### Relevante discussies voor MijnZaken Overzicht

- [Discussion MijnZaken](https://github.com/orgs/nl-design-system/discussions/394)

## Links

- [Figma ontwerp](https://www.figma.com/design/pB5d6RlVSa1B088Xpm1sSo/MijnServices---Templates?node-id=5488-3723&p=f&t=WgLEQ9wGEkFoJJvb-0)
