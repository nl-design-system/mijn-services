export interface ProgressListStepBase {
  label: string;
  state: 'checked' | 'warning' | 'error' | 'pending'; // LETOP: Moet handmatig synchroon blijven met DotState in Dot.tsx. (later shared type maken?)
  // miss andere naam dan state (te breed?)
  // checked als aparte prop? boolean? (edge case: mocht interterm ooit nodig zijn = aparte prop ernaast)
  date?: string; // TODO: navragen/Figma checken of dateLabel (mens-leesbaar, bv. "10 mei 2026") nodig is naast deze ISO datum (voor dateTime-attribuut), i.p.v. alleen date tonen
  // date hernoemen naar dateTime = ISO 8601
  // nieuwe toevoegen dateLabel = mens leesbare versie van date (in wrapper die backend API (zou 8601 horen te hebben) omzet naar mens leesbaar, gebruik: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat )
  current?: boolean;
  // platter opschrijven ipv genest
  body?: {
    text: string;
    link?: {
      text: string; // text van string naar reactnode om breder bruikbaar te maken
      href: string;
    };
    variant?: 'checked' | 'current' | 'warning' | 'error' | 'pending';
    // current eigen binnen body ipv in variant
  };
}

interface ProgressListStepData extends ProgressListStepBase {
  substeps?: ProgressListSubStepData[]; // subSteps
}

interface ProgressListSubStepData extends ProgressListStepBase {}

// Test
// const stap2: ProgressListStepData = {
//   label: 'In behandeling',
//   state: 'warning',
//   date: '10 mei 2026',
//   body: {
//     text: 'Momenteel is het uitzonderlijk druk. Houd hierdoor rekening met 2 weken verwerkingstijd.',
//   },
//   substeps: [
//     {
//       label: 'Review van documenten',
//       state: 'warning',
//       date: '10 mei 2026',
//       body: {
//         text: 'Momenteel is het uitzonderlijk druk. Houd hierdoor rekening met 2 weken verwerkingstijd.',
//       },
//     },
//   ],
// };
