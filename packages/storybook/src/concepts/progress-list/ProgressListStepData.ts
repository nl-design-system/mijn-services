import type { ReactNode } from 'react';
export interface ProgressListStepBase {
  label: string;
  state: 'checked' | 'warning' | 'error' | 'pending'; // LETOP: Moet handmatig synchroon blijven met DotState in Dot.tsx. (later shared type maken?)
  // miss andere naam dan state (te breed?)
  // checked als aparte prop? boolean? (edge case: mocht interterm ooit nodig zijn = aparte prop ernaast)
  dateTime?: string; // ISO 8601, voor het dateTime-attribuut van <time>
  dateLabel?: string; // leesbare tekst (bijv. 10 mei, 2026). Formatteren buiten comp (bv. met Intl.DateTimeFormat)
  current?: boolean;
  // platter opschrijven ipv genest
  body?: {
    text: string;
    link?: {
      text: ReactNode;
      href: string;
    };
    variant?: 'checked' | 'warning' | 'error' | 'pending';
    current?: boolean;
  };
}

export interface ProgressListStepData extends ProgressListStepBase {
  substeps?: ProgressListSubStepData[]; // subSteps
}

export interface ProgressListSubStepData extends ProgressListStepBase {}

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
