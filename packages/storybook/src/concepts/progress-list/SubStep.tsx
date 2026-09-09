import clsx from 'clsx';
import { Dot } from './Dot';
import type { ProgressListStepBase } from './ProgressListStepData';

interface SubStepProps extends ProgressListStepBase {
  className?: string;
}

export function SubStep({ className, label, state, date, body }: SubStepProps) {
  return (
    <li className={`denhaag-progress-list__subitem denhaag-progress-list__subitem--${state}`}>
      <span className="denhaag-progress-list__marker">
        <Dot state={state} srText="TODO" subStep />
      </span>
      <div className={clsx('denhaag-progress-list__content', className)}>
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
