import { Step } from '../Step';
import { SubStep } from '../SubStep';

export function Scenario1Fragment() {
  return (
    <ol className="denhaag-progress-list" role="list" aria-label="Figma scenario 1">
      <Step state="checked" label="Ontvangen" static />

      <Step state="warning" label="In behandeling" current open date="2026-05-10">
        <ol className="denhaag-progress-list__substeps" role="list">
          <SubStep
            state="warning"
            label="Review van documenten"
            date="2026-05-10"
            body={{
              text: 'De door u aangeleverde documenten zijn niet compleet.',
              variant: 'warning',
              link: { text: 'Documenten →', href: '#' },
            }}
          />
          <SubStep state="pending" label="Intern overleg" />
          <SubStep state="pending" label="Stemmen" />
        </ol>
      </Step>

      <Step state="pending" label="Resultaat" number={3} static />
    </ol>
  );
}
