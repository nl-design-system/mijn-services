import clsx from 'clsx';
import { Dot } from './Dot';
import type { ProgressListStepBase } from './ProgressListStepData';
import type { ComponentPropsWithoutRef } from 'react';

// interfaces beschikbaar maken export (bij comp altijd chill om te doen)
export interface SubStepProps extends ComponentPropsWithoutRef<'li'>, ProgressListStepBase {
  // className komt van HTML element = global ding en TS def voor. Ophalen uit React meer gebruikelijk.
  // manier om alleen className eruit te halen (zoiets: extends ProgressListStepBase, Pick<HTMLElement, 'className'>)
  // optie: los van HTML preact (zoals current eigen prop) handig om die apart te doen van wat je gratis van HTML krijgt (anders nooit meer apart mijn dingen) - maakt het meer robuust/breder bruikbaar
  // hier of verderop extenden (zie utrecht voor hun manier) - https://github.com/nl-design-system/candidate/blob/main/packages/components-react/form-field-description-react/src/form-field-description.tsx#L5
  // restprops
}

// consistency SubStep vs SubItem
export function SubStep({ className, label, state, date, body, ...restProps }: SubStepProps) {
  return (
    <li
      className={clsx('denhaag-progress-list__subitem', `denhaag-progress-list__subitem--${state}`, className)}
      {...restProps}
    >
      <span className="denhaag-progress-list__marker">
        {' '}
        {/* block/inline niet door elkaar dus span - div */}
        <Dot state={state} srText="TODO" subStep /> {/* srText hernoemen naar label (aria terminologie gebruiken)*/}
      </span>
      <div className={'denhaag-progress-list__content'}>
        {' '}
        {/* const maken ipv los bijv const SCREENREADER_SEPARATOR = ' '; // className hier weggehaald - check of iets stuk is nu */}
        <p className="denhaag-progress-list__label">{label}</p>
        {date && (
          <p className="denhaag-progress-list__date">
            <time dateTime={date}>{date}</time>
          </p>
        )}
        {body && (
          <p
            className={clsx('denhaag-progress-list__body', {
              [`denhaag-progress-list__body--${body.variant}`]: body.variant,
            })}
          >
            {body.text}
            {body.link && (
              <>
                {' '}
                <a href={body.link.href}>{body.link.text}</a>
              </>
            )}
          </p>
        )}
      </div>
    </li>
  );
}
