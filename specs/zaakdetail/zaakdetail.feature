# language: nl
# Afspraken: zie specs/README.mds

# TODO: in service blueprints (patronen/bouwstenen) werken, niet pagina based

@zaakdetail
Functionaliteit: Zaakdetail
  <Eén of twee zinnen: wat is deze pagina en waarom bestaat hij voor de inwoner?>

  Buiten scope: de paginaschil (header, footer, zijnavigatie, skiplink).
  Die is op elke pagina gelijk en wordt hier niet beschreven.

  Figma: <link>
  Storybook: <link>
  Discussie: <link>
  API: <link>
  VNG documentatie: <link>

  # ====== Pagina als geheel ======

  # Elke sectie heeft een eigen kop (Status, Details, Documenten, Contactmomenten) onder de hoofdkop. Bron: template. Dit kan je kopstructuur-scenario invullen.
  # zaken overzicht pagina: @open # Scenario: Inwoner heeft (nog) geen zaken. # Vraag: Wat ziet de inwoner als er (nog) geen zaken zijn?

  @pagina
  Regel: De inwoner ziet om welke zaak het gaat

    @hypothese
    Scenario: Zaaktitel uit de omschrijving
      Stel ik heb een zaak met de omschrijving "Aanvraag parkeervergunning"
      Wanneer ik de details van de zaak bekijk
      Dan zie ik de zaaktitel "Aanvraag parkeervergunning" als hoofdkop

    # verwijzen naar zaakdetail template documentation.md voor welke componenten en API koppeling etc. en template voorbeeld voor technische implementatie
    
    @open
    Scenario: Welke naam van de zaak staat bovenaan?
      vraag: Was het de bedoeling dat het zaaktype bovenaan staat, en is 
      de omschrijving gekozen omdat Catalogi API nog niet gekoppeld is? 
      In de template: de omschrijving met het zaaknummer als fallback.
      Aansluitprofiel ZGW: waarschuwt dat de omschrijving te intern kan zijn voor een inwoner en noemt het zaaktype als alternatief.
      Figma: toont een titel, maar niet herkomst.
      Bron: geen besluit gevonden (bij wie navragen?)
    

    @open
    Scenario: Zaak kan niet geladen worden
      Vraag: Wat ziet de inwoner als een zaak niet geladen kan worden?
      Bron: states in de schermprofielen (error state)
      Template: 
      Figma: 

    @open
    Scenario: Zaak bestaat niet
    Vraag: wat ziet de inwoner als de zaak niet bestaat maar de inwoner deze wel verwacht? Bijv. bij openen oude link. Standaard melding? Kan iemand nog uitzoeken waarom/welke niet bestaan? Is daar vraag naar vanuit inwoner?


    # wat ziet iemand als deze een zaak opent die niet van hem/haar is (bijv via delen van een link?)
    # wat ziet een gemachtigde? Alles/deels? Is dat onderscheid duidelijk/zichtbaar op de pagina?
    # wat gebeurt er als inlogsessie is verlopen?
    # Ziet een gesloten zaak er anders uit dan een lopende?
    # kan een zaak bij andere organisatie horen dan gemeente?
    # waarom deze volgorde van secties (actie, status, details, docs, contactmomenten) en wie heeft dat bepaald? Bron? GH discussions?
    # wat geeurt er met een sectie zonder inhoud (bijv als er nog geen contactmomenten zijn) blijft de kop dan staan? Is die aanpak overal gelijk of verschilt het per sectie?
    # op mobiel = terug link, op desktop is breadcrumb - dat is bewust (bron ? WCAG/richtlijn NLDS?) Is iedereen het hiermee eens/is er meer validatie nodig?
    # waar begint de focus na laden van pagina? (is dit conform WCAG?)
    # is het taalgebruik begrijpelijk (B1?). Tekst uit API ook?

  @pagina
  Regel: Vanuit een zaak kan de inwoner terug naar het overzicht
    # technische implementatie breadcrumb component - correct instellen instructies/verwijzen NLDS + API koppeling  

    @hypothese
    Scenario: Terug naar mijn zaken
      Stel ik bekijk de details van een zaak
      Wanneer ik terug wil naar het overzicht
      Dan kan ik naar mijn zaken navigeren

    @open
    Scenario: Hoort het kruimelpad bij de paginaschil of bij de pagina inhoud?
      Vraag: het staat nu bij de schil, maar de inhoud is per pagina anders
      en het helpt bij het terugnavigeren vanuit een zaak.

  @pagina
  Regel: De pagina is toegankelijk opgebouwd

    @hypothese
    Scenario: Paginatitel is aanwezig en duidelijk
      WCAG: 0.0.0

      Stel ik bekijk de details van een zaak
      Wanneer de pagina geladen is
      Dan bevat de titel in het browsertabblad de naam van de zaak 
      En is het voor mij duidelijk te begrijpen om welke zaak het gaat

 
 
 # ====== Actie bovenaan (en onderin) ======
    # Er staat een blok “Geef informatie voor uw [zaak]” met een knop en een termijn. In de template is dat nu een vast voorbeeld.
    # @open: wanneer verschijnt dit, en waar komt de taak vandaan? Bron: bouwsteen MijnTaken en het schermprofiel “Taken in context”.

# ====== Status ======
    # Statussen staan op volgorde van datum, en de huidige status is uitgeklapt. Bron: template.
    # De naam van een stap is de toelichting bij de status, of anders “Status gezet op [datum]”. Bron: template.
    # @open: vertalen naar begrijpelijke mijlpalen, en welke statussen een inwoner te zien krijgt. Bron: aansluitprofiel ZGW, UC-02.
    # @open: wat als er geen statussen zijn?

# ====== Details ======
    # Datum aanvraag, startdatum en zaaknummer; de einddatum alleen als de zaak is afgerond. Bron: template, aansluitprofiel “Datums duiden”.
    # @open: als er geen registratiedatum is, tonen “Datum aanvraag” en “Startdatum” dezelfde datum. Is dat de bedoeling?
    # @open: tonen we ook de geplande einddatum, de behandelende organisatie of het zaaktype? Bron: aansluitprofiel ZGW.

# ====== Documenten ======
    # Elk document toont een naam (titel of beschrijving) en een datum, en is te openen. Bron: template.
    # Zonder documenten verdwijnt de hele sectie. Bron: template. Dit is anders dan het eerdere voorbeeld met een melding, dus maak er een @open van: verbergen of melden?
    # Bestandstype en grootte ontbreken nu; die komen uit de Documenten API. Data: niet beschikbaar met de huidige koppeling. Sluit aan op je geplande vervolgstap.
    # @open: welke documenten zijn voor de inwoner bedoeld? Bron: aansluitprofiel ZGW, open vragen.
    # Componentgebruik: het NLDS File-component, nu met tijdelijke styling. Bron: template.
    # Toegankelijkheid: je scenario’s voor schermlezer en toetsenbord.

# ====== Contactmomenten ======
    # De kop staat er altijd, ook als er geen contactmomenten zijn. @open: wat ziet een inwoner dan? Bron: bouwsteen MijnContactmomenten.

# ====== Wat ontbreekt ten opzichte van de bouwsteen ======
    # @open: besluit en resultaat. UC-03 heet “Zaakdocumenten en besluit inzien”, maar de template toont geen besluit of resultaat.
    # @open: betrokkenen, zoals een gemachtigde.