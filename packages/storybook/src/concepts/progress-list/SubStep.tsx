import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { Dot } from './Dot';
import type { ProgressListStepBase } from './ProgressListStepData';

export interface SubStepProps extends ComponentPropsWithoutRef<'li'>, ProgressListStepBase {}

export const SubStep = forwardRef<HTMLLIElement, SubStepProps>(function SubStep(
  { className, label, state, date, body, ...restProps },
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
});
SubStep.displayName = 'SubStep';
