import type { ReactNode } from 'react';
import clsx from 'clsx';
import { IconCheck, IconX, IconExclamationMark } from '@tabler/icons-react';
import type { Icon as TablerIcon } from '@tabler/icons-react';
import { Icon } from '@utrecht/component-library-react';
import '@utrecht/icon-css/dist/index.css';
// pending & current hebben getallen - via symbol? Of ook een Icon voor consistentie? Vragen bij Robbert

// DH Process Steps gebruikt aparte Step Marker import, maar die mist bepaalde accessibility dingen.
// Opties: step marker verbeteren en die gebruiken? Of Progress List deze eigen Dot gebruiken?

// op dit moment geen forwardRef (= niet nodig denk ik? naar dot miss overkill, bij step mogelijk wel van meerwaarde)
export type DotState = 'checked' | 'warning' | 'error' | 'pending'; // LETOP: Moet handmatig synchroon blijven met state in ProgressListStepData.ts. (later shared type maken?)

export interface DotProps {
  state: DotState;
  current?: boolean;
  accessibleText: string;
  symbol?: ReactNode;
  subStep?: boolean;
}

const stateIcons: Partial<Record<DotState, TablerIcon>> = {
  checked: IconCheck,
  error: IconX,
  warning: IconExclamationMark,
};

export function Dot({ current, state, accessibleText, symbol, subStep = false }: DotProps) {
  const StateIcon = stateIcons[state];

  return (
    <span
      className={clsx(
        'denhaag-progress-list__dot',
        { 'denhaag-progress-list__dot--sub': subStep },
        { 'denhaag-progress-list__dot--current': current },
        `denhaag-progress-list__dot--${state}`,
      )}
    >
      {symbol !== undefined ? (
        <span aria-hidden="true">{symbol}</span>
      ) : (
        StateIcon &&
        !subStep && (
          <Icon>
            <StateIcon />
          </Icon>
        )
      )}
      <span className="sr-only denhaag-progress-list__sr-pause">{accessibleText}:</span>
      <span className="sr-only"> </span>
    </span>
  );
}
