import type { ReactNode } from 'react';

export type ProgressListState = 'checked' | 'warning' | 'error' | 'pending';
export interface ProgressListStepBase {
  label: string;
  state: ProgressListState;
  // Vraag voor DH devs: state of status of anders? (DH en Ams gebruiken status).
  // checked als aparte prop? boolean? (edge case: mocht interterm ooit nodig zijn = aparte prop ernaast)
  dateTime?: string; // ISO 8601, voor het dateTime-attribuut van <time>
  dateLabel?: string; // leesbare tekst (bijv. 10 mei, 2026). Formatteren buiten comp (bv. met Intl.DateTimeFormat)
  current?: boolean; // Vraag voor Thijs: kan een substap de huidige zijn? (Zo niet = current alleen bij StepProps)
  body?: ReactNode;
  bodyVariant?: 'checked' | 'warning' | 'error' | 'pending';
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
