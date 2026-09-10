import clsx from 'clsx';
import { CheckedIcon, CloseIcon } from '@gemeente-denhaag/icons';
// warning heeft geen icon? Tijdelijk uit Tabler, unicode voor POC + navragen bij Thijs? + toevoegen Icon DH opties?
// pending & current hebben getallen - via symbol? Of ook een Icon voor consistentie? Vragen bij Robbert

// DH Process Steps gebruikt aparte Step Marker import, maar die mist bepaalde accessibility dingen.
// Opties: step marker verbeteren en die gebruiken? Of Progress List deze eigen Dot gebruiken?

// op dit moment geen forwardRef (= niet nodig denk ik? naar dot miss overkill, bij step mogelijk wel van meerwaarde)
export type DotState = 'checked' | 'warning' | 'error' | 'pending'; // LETOP: Moet handmatig synchroon blijven met state in ProgressListStepData.ts. (later shared type maken?)

interface DotProps {
  state: DotState;
  current?: boolean;
  srText: string;
  symbol?: React.ReactNode;
  subStep?: boolean;
  // even checken of hier idd geen className voor nodig is?
}

const stateIcons: Partial<Record<DotState, React.ComponentType>> = {
  checked: CheckedIcon,
  error: CloseIcon,
  // warning: nog geen icon beschikbaar
};

export function Dot({ current, state, srText, symbol, subStep = false }: DotProps) {
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
      {/* utrecht icon eromheen ? + mogelijk extra voordeel: icon size makkelijker in te stellen. */}
      {symbol !== undefined ? <span aria-hidden="true">{symbol}</span> : StateIcon && <StateIcon aria-hidden="true" />}
      <span className="sr-only denhaag-progress-list__sr-pause">{srText}:</span>
      <span className="sr-only"> </span>
    </span>
  );
}
