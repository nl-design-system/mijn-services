import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { Dot } from './Dot';
import type { ProgressListStepBase } from './ProgressListStepData';

export interface SubStepProps extends ComponentPropsWithoutRef<'li'>, ProgressListStepBase {}

export const SubStep = forwardRef<HTMLLIElement, SubStepProps>(function SubStep(
  { className, label, state, dateTime, dateLabel, body, bodyVariant, ...restProps },
  forwardedRef,
) {
  return (
    <li
      ref={forwardedRef}
      className={clsx('denhaag-progress-list__substep', `denhaag-progress-list__substep--${state}`, className)}
      {...restProps}
    >
      <span className="denhaag-progress-list__marker">
        <Dot state={state} accessibleText="TODO" subStep />
      </span>
      <div className="denhaag-progress-list__content">
        <p className="denhaag-progress-list__label">{label}</p>
        {dateTime && (
          <p className="denhaag-progress-list__date">
            <time dateTime={dateTime}>{dateLabel ?? dateTime}</time>
          </p>
        )}
        {body && (
          <div className={clsx('denhaag-progress-list__body', `denhaag-progress-list__body--${bodyVariant ?? state}`)}>
            {body}
          </div>
        )}
      </div>
    </li>
  );
});
SubStep.displayName = 'SubStep';
