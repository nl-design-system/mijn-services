export function Scenario4Fragment() {
  return (
    <>
    <ol className="denhaag-progress-list" role="list" aria-label="Figma scenario 4">
      <li className="denhaag-progress-list__item denhaag-progress-list__item--checked">
        <div className="denhaag-progress-list__step-row denhaag-progress-list__step-row--static">
          <span className="denhaag-progress-list__marker"><span className="denhaag-progress-list__dot denhaag-progress-list__dot--checked"><span aria-hidden="true">✓</span><span className="sr-only denhaag-progress-list__sr-pause">Voltooid:</span><span className="sr-only"> </span></span></span>
          <div className="denhaag-progress-list__content"><p className="denhaag-progress-list__label">Verstuurd</p></div>
        </div>
      </li>
      <li className="denhaag-progress-list__item denhaag-progress-list__item--checked">
        <div className="denhaag-progress-list__step-row denhaag-progress-list__step-row--static">
          <span className="denhaag-progress-list__marker"><span className="denhaag-progress-list__dot denhaag-progress-list__dot--checked"><span aria-hidden="true">✓</span><span className="sr-only denhaag-progress-list__sr-pause">Voltooid:</span><span className="sr-only"> </span></span></span>
          <div className="denhaag-progress-list__content"><p className="denhaag-progress-list__label">Ontvangen</p></div>
        </div>
      </li>
      <li className="denhaag-progress-list__item denhaag-progress-list__item--warning" aria-current="step">
        <details className="denhaag-progress-list__step-row" open>
          <summary className="denhaag-progress-list__step-row-button">
            <span className="denhaag-progress-list__marker">
              <span className="denhaag-progress-list__dot denhaag-progress-list__dot--warning">
                <span aria-hidden="true">!</span>
                <span className="sr-only denhaag-progress-list__sr-pause">Let op:</span>
                <span className="sr-only"> </span>
              </span>
            </span>
            <span className="denhaag-progress-list__content">
              <span className="denhaag-progress-list__label">In behandeling</span>
            </span>
            <span className="denhaag-progress-list__chevron" aria-hidden="true">⌄</span>
          </summary>
          <div className="denhaag-progress-list__content">
            <p className="denhaag-progress-list__date"><time dateTime="2026-05-10">10 mei 2026</time></p>
          </div>
          <ol className="denhaag-progress-list__substeps" role="list">
            <li className="denhaag-progress-list__subitem denhaag-progress-list__subitem--warning">
              <span className="denhaag-progress-list__marker">
                <span className="denhaag-progress-list__dot denhaag-progress-list__dot--sub denhaag-progress-list__dot--warning">
                  <span className="sr-only denhaag-progress-list__sr-pause">Let op:</span>
                  <span className="sr-only"> </span>
                </span>
              </span>
              <div className="denhaag-progress-list__content">
                <p className="denhaag-progress-list__label">Review van documenten</p>
                <p className="denhaag-progress-list__date"><time dateTime="2026-05-10">10 mei 2026</time></p>
                <p className="denhaag-progress-list__body denhaag-progress-list__body--warning" id="rvd-3-body">
                  De door u aangeleverde documenten zijn niet compleet.
                  <a href="#" aria-labelledby="rvd-3-body">Documenten →</a>
                </p>
              </div>
            </li>
            <li className="denhaag-progress-list__subitem denhaag-progress-list__subitem--pending">
              <span className="denhaag-progress-list__marker"><span className="denhaag-progress-list__dot denhaag-progress-list__dot--sub denhaag-progress-list__dot--pending"><span className="sr-only denhaag-progress-list__sr-pause">Nog niet begonnen:</span><span className="sr-only"> </span></span></span>
              <div className="denhaag-progress-list__content"><p className="denhaag-progress-list__label">Intern overleg</p></div>
            </li>
            <li className="denhaag-progress-list__subitem denhaag-progress-list__subitem--pending">
              <span className="denhaag-progress-list__marker"><span className="denhaag-progress-list__dot denhaag-progress-list__dot--sub denhaag-progress-list__dot--pending"><span className="sr-only denhaag-progress-list__sr-pause">Nog niet begonnen:</span><span className="sr-only"> </span></span></span>
              <div className="denhaag-progress-list__content"><p className="denhaag-progress-list__label">Stemmen</p></div>
            </li>
          </ol>
        </details>
      </li>
      <li className="denhaag-progress-list__item denhaag-progress-list__item--pending">
        <div className="denhaag-progress-list__step-row denhaag-progress-list__step-row--static">
          <span className="denhaag-progress-list__marker"><span className="denhaag-progress-list__dot denhaag-progress-list__dot--pending"><span aria-hidden="true">4</span><span className="sr-only denhaag-progress-list__sr-pause">Nog niet begonnen:</span><span className="sr-only"> </span></span></span>
          <div className="denhaag-progress-list__content"><p className="denhaag-progress-list__label">Voorlegging</p></div>
        </div>
      </li>
      <li className="denhaag-progress-list__item denhaag-progress-list__item--pending">
        <div className="denhaag-progress-list__step-row denhaag-progress-list__step-row--static">
          <span className="denhaag-progress-list__marker"><span className="denhaag-progress-list__dot denhaag-progress-list__dot--pending"><span aria-hidden="true">5</span><span className="sr-only denhaag-progress-list__sr-pause">Nog niet begonnen:</span><span className="sr-only"> </span></span></span>
          <div className="denhaag-progress-list__content"><p className="denhaag-progress-list__label">Resultaat</p></div>
        </div>
      </li>
    </ol>
    </>
  );
}