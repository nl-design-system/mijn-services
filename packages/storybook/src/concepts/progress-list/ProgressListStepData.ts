export interface ProgressListStepBase {
  label: string;
  state: 'checked' | 'warning' | 'error' | 'pending'; // LETOP: Moet handmatig synchroon blijven met DotState in Dot.tsx. (later shared type maken?)
  date?: string; // TODO: navragen/Figma checken of dateLabel (mens-leesbaar, bv. "10 mei 2026") nodig is naast deze ISO datum (voor dateTime-attribuut), i.p.v. alleen date tonen
  current?: boolean;
  body?: {
    text: string;
    link?: {
      text: string;
      href: string;
    };
    variant?: 'checked' | 'current' | 'warning' | 'error' | 'pending';
  };
}

interface ProgressListStepData extends ProgressListStepBase {
  substeps?: ProgressListSubStepData[];
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
