<!-- @license CC0-1.0 -->

# Formulier introductiepagina

## Structuur van componenten

- Page Title
- Page Header
  - Logo: link naar homepage? waarschuwen bij form verlaten?
- Heading 1: titel van formulier
- Heading 2: titel van stap
- Optioneel: Alert met validatie
- Intro tekst: Samenvatting en hulp bieden
- Hierna pas een Form element
- Action Group met Submit Button
- Page Footer: hulp bieden

### Page

Gebruik een `<html>` met `dir` en `lang` attributen voor de taal van het document.

Component: gebruik gewoon het HTML-element `<html>`.

Lees meer bij over [WCAG-succescriterium 3.1.1 Taal van de pagina](https://nldesignsystem.nl/wcag/3.1.1)

### Page Title

Inhoud: stap x van y, titel van de stap, titel van het formulier, afzender.
Component: gebruik gewoon het HTML-element `<title>`.

Lees meer bij over [WCAG-succescriterium 2.4.2 Paginatitel bij NL Design System](https://nldesignsystem.nl/wcag/2.4.2/).

### Page Header

Inhoud: maak duidelijk wie de afzender is van de pagina, met een logo.

Component: gebruik de [Page Header](https://nldesignsystem.nl/page-header/), of gebruik gewoon het HTML-element `<header>`. Wij hebben de [Utrecht Page Header](https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-page-header--docs) gebruikt.

Logo als link.

### Heading 1

Inhoud: titel van het formulier.

### Heading 2

Inhoud: titel van de stap.

Als je weet hoeveel stappen het formulier heeft, dan kun je ook Heading Group gebruiken.

### Heading Group (optioneel)

Inhoud: Heading 2 met titel van de stap, Pre-heading of Subheading met bijvoorbeeld "Stap 1 van 4".

### Paragraph

Inhoud:

- Wat je bereikt met het formulier.
- Wat je nodig hebt.
- Hoe je hulp kunt krijgen.

### Form

Het `<form>` element in HTML moet pas beginnen ná de tekst en uitleg.

Component: gebruik gewoon het HTML-element `<form>`.

Als je het verzenden van het formulier doet met JavaScript, gebruik dan de `submit` event van het formulier, en niet de `click` event van de submit button. Dat is nodig voor gebruikers van een [toetsenbord](https://nldesignsystem.nl/wcag/2.1.1).

### Action Group

Inhoud: Submit Button om verder te gaan.

### Page Footer

Inhoud: informatie om hulp te krijgen met het formulier, bijvoorbeeld door contact op te nemen.
