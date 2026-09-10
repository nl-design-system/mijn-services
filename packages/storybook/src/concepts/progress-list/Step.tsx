import { forwardRef, type PropsWithChildren } from 'react'; // forwardRef hoeft geen type
import { Dot } from './Dot';
import type { ProgressListStepBase } from './ProgressListStepData';

// zelfde refactor als in SubStep
interface StepProps extends ProgressListStepBase {
  className?: string;
  current?: boolean;
  static?: boolean;
  open?: boolean;
  number?: number; // number ook via icon op te halen + same size maken, geen apart number (if voor axe dan miss https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  children?: React.ReactNode; // children via import - dus eruit + ReactNode ook als import (= mooier dan React.ReactNode)
}

export const Step = forwardRef<HTMLLIElement, PropsWithChildren<StepProps>>(function Step(
  { current, label, state, date, body, static: isStatic, open, number, children },
  forwardedRef,
) {
  return (
    <li
      ref={forwardedRef}
      aria-current={current ? 'step' : undefined}
      className={`denhaag-progress-list__item denhaag-progress-list__item--${state}`}
    >
      {isStatic ? (
        <div className="denhaag-progress-list__step-row denhaag-progress-list__step-row--static">
          <span className="denhaag-progress-list__marker">
            <Dot state={state} current={current} srText="TODO" symbol={number} /> {/* TODO: icon ipv symbol */}
          </span>
          <span className="denhaag-progress-list__content">
            <span className="denhaag-progress-list__label">{label}</span>
          </span>
        </div>
      ) : (
        <details className="denhaag-progress-list__step-row" open={open}>
          <summary className="denhaag-progress-list__step-row-button">
            <span className="denhaag-progress-list__marker">
              <Dot state={state} current={current} srText="TODO" symbol={number} />
            </span>
            <span className="denhaag-progress-list__content">
              <span className="denhaag-progress-list__label">{label}</span>
            </span>
            <span className="denhaag-progress-list__chevron" aria-hidden="true">
              ⌄{' '}
              {/* chevron als default, maar kan react node ipv string worden net als andere icons - aparte prop voor maken/BEM expandIcon */}
            </span>
          </summary>
          {(date || body) && (
            <div className="denhaag-progress-list__content">
              {date && (
                <p className="denhaag-progress-list__date">
                  <time dateTime={date}>{date}</time>
                </p>
              )}
              {body && (
                <p className="denhaag-progress-list__body">
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
          )}
          {children}
        </details>
      )}
    </li>
  );
});
Step.displayName = 'Step';
