export function LosseStatesFragment() {
  return (
    <>
    <h2 id="losse-states-heading">Losse states </h2>

    <ol className="denhaag-progress-list denhaag-progress-list--reference" aria-labelledby="losse-states-heading" role="list">

      <li className="denhaag-progress-list__item denhaag-progress-list__item--checked">
        <details className="denhaag-progress-list__step-row">
          <summary className="denhaag-progress-list__step-row-button">
            <span className="denhaag-progress-list__marker">
              <span className="denhaag-progress-list__dot denhaag-progress-list__dot--checked">
                <span aria-hidden="true">✓</span>
                <span className="sr-only denhaag-progress-list__sr-pause">Voltooid:</span>
                <span className="sr-only"> </span>
              </span>
            </span>
            <span className="denhaag-progress-list__content">
              <span className="denhaag-progress-list__label">checked</span>
            </span>
            <span className="denhaag-progress-list__chevron" aria-hidden="true">⌄</span>
          </summary>
          <div className="denhaag-progress-list__content">
            <p className="denhaag-progress-list__date"><time dateTime="2026-05-08">8 mei 2026</time></p>
          </div>
        </details>
      </li>

      <li className="denhaag-progress-list__item denhaag-progress-list__item--current">
        <details className="denhaag-progress-list__step-row">
          <summary className="denhaag-progress-list__step-row-button">
            <span className="denhaag-progress-list__marker">
              <span className="denhaag-progress-list__dot denhaag-progress-list__dot--current">
                <span aria-hidden="true">2</span>
                <span className="sr-only denhaag-progress-list__sr-pause">Actieve stap:</span>
                <span className="sr-only"> </span>
              </span>
            </span>
            <span className="denhaag-progress-list__content">
              <span className="denhaag-progress-list__label">current</span>
            </span>
            <span className="denhaag-progress-list__chevron" aria-hidden="true">⌄</span>
          </summary>
          <div className="denhaag-progress-list__content">
            <p className="denhaag-progress-list__date"><time dateTime="2026-05-10">10 mei 2026</time></p>
          </div>
        </details>
      </li>

      <li className="denhaag-progress-list__item denhaag-progress-list__item--warning">
        <details className="denhaag-progress-list__step-row">
          <summary className="denhaag-progress-list__step-row-button">
            <span className="denhaag-progress-list__marker">
              <span className="denhaag-progress-list__dot denhaag-progress-list__dot--warning">
                <span aria-hidden="true">!</span>
                <span className="sr-only denhaag-progress-list__sr-pause">Let op:</span>
                <span className="sr-only"> </span>
              </span>
            </span>
            <span className="denhaag-progress-list__content">
              <span className="denhaag-progress-list__label">warning</span>
            </span>
            <span className="denhaag-progress-list__chevron" aria-hidden="true">⌄</span>
          </summary>
          <div className="denhaag-progress-list__content">
            <p className="denhaag-progress-list__date"><time dateTime="2026-05-11">11 mei 2026</time></p>
          </div>
        </details>
      </li>

      <li className="denhaag-progress-list__item denhaag-progress-list__item--error">
        <details className="denhaag-progress-list__step-row">
          <summary className="denhaag-progress-list__step-row-button">
            <span className="denhaag-progress-list__marker">
              <span className="denhaag-progress-list__dot denhaag-progress-list__dot--error">
                <span aria-hidden="true">✕</span>
                <span className="sr-only denhaag-progress-list__sr-pause">Fout:</span>
                <span className="sr-only"> </span>
              </span>
            </span>
            <span className="denhaag-progress-list__content">
              <span className="denhaag-progress-list__label">error</span>
            </span>
            <span className="denhaag-progress-list__chevron" aria-hidden="true">⌄</span>
          </summary>
          <div className="denhaag-progress-list__content">
            <p className="denhaag-progress-list__date"><time dateTime="2026-05-14">14 mei 2026</time></p>
          </div>
        </details>
      </li>

      <li className="denhaag-progress-list__item denhaag-progress-list__item--pending">
        <div className="denhaag-progress-list__step-row denhaag-progress-list__step-row--static">
          <span className="denhaag-progress-list__marker">
            <span className="denhaag-progress-list__dot denhaag-progress-list__dot--pending">
              <span aria-hidden="true">4</span>
              <span className="sr-only denhaag-progress-list__sr-pause">Nog niet begonnen:</span>
              <span className="sr-only"> </span>
            </span>
          </span>
          <div className="denhaag-progress-list__content">
            <p className="denhaag-progress-list__label">pending</p>
          </div>
        </div>
      </li>

    </ol>
    </>
  );
}