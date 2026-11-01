import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import './style.css';

export type ProgressListProps = ComponentPropsWithoutRef<'ol'>;

export const ProgressList = forwardRef<HTMLOListElement, ProgressListProps>(function ProgressList(
  { className, children, ...restProps },
  forwardedRef,
) {
  return (
    <ol ref={forwardedRef} role="list" className={clsx('denhaag-progress-list', className)} {...restProps}>
      {children}
    </ol>
  );
});
ProgressList.displayName = 'ProgressList';
