<!-- @license CC0-1.0 -->

# Formulier controlepagina

## Structuur van componenten

- Page
- Page Title
- Page Header
- Logo
- Heading 1: titel van formulier
- Heading 2: titel van stap
- Form Summary
- Hierna pas een Form element
- Action Group met Submit Button
- Page Footer: hulp bieden

### Form Summary

Inhoud: alle data die de gebruiker heeft ingevoerd.

Wij gebruiken hier de volgende componenten:

- [Utrecht Data List](https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-data-list--docs)

Plaats alle data van de gebruiker binnen de juiste componenten, zodat de gegevens goed worden getoond:

- [Preserve Data](https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-preserve-data--docs): dit is de standaard voor vrijwel alle data. Voor bepaalde soorten data staan hierna nog enkele opties.
- [URL Data](https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/story/css-link--url-data-story): voor internetadressen, e-mailadressen en bestandsnamen.
- [Number Data](https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-number-data--docs): voor numerieke data, zoals getallen.
- [Currency Data](https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-currency-data--docs): voor geldbedragen.
- [IBAN Data](https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-iban-data--docs) voor bankrekeningen in IBAN-formaat.
- het HTML-element `<time>` voor datums en tijden.
- [Multiline Data](https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-multiline-data--docs) voor teksten die met "newline characters" uit de backend komen, die je wilt tonen zonder `<br>` element.

Lees meer over [WCAG-succescriterium 3.3.6 Foutpreventie bij NL Design System](https://nldesignsystem.nl/wcag/3.3.6/)
