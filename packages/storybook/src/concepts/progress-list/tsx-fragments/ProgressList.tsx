export function ProgressList() {
  return (
    <>
      <h2 id="demo-progress-list-heading">Voorbeeld: volledige Progress List</h2>

      <ol className="denhaag-progress-list" aria-labelledby="demo-progress-list-heading" role="list">
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
                <span className="denhaag-progress-list__label">Ontvangen</span>
              </span>
              <span className="denhaag-progress-list__chevron" aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className="denhaag-progress-list__content">
              <p className="denhaag-progress-list__date">
                <time dateTime="2026-05-08">8 mei 2026</time>
              </p>
            </div>
          </details>
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
              <span className="denhaag-progress-list__chevron" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="denhaag-progress-list__content">
              <p className="denhaag-progress-list__date">
                <time dateTime="2026-05-10">10 mei 2026</time>
              </p>
              <p className="denhaag-progress-list__body">
                Momenteel is het uitzonderlijk druk. Houd hierdoor rekening met 2 weken verwerkingstijd.
              </p>
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
                  <p className="denhaag-progress-list__date">
                    <time dateTime="2026-05-10">10 mei 2026</time>
                  </p>
                  <p className="denhaag-progress-list__body denhaag-progress-list__body--warning" id="rvd-1-body">
                    <span className="sr-only">Let op: </span>
                    De door u aangeleverde documenten zijn niet compleet.
                    <a href="#" aria-labelledby="rvd-1-body">
                      Documenten →
                    </a>
                  </p>
                </div>
              </li>

              <li className="denhaag-progress-list__subitem denhaag-progress-list__subitem--pending">
                <span className="denhaag-progress-list__marker">
                  <span className="denhaag-progress-list__dot denhaag-progress-list__dot--sub denhaag-progress-list__dot--pending">
                    <span className="sr-only denhaag-progress-list__sr-pause">Nog niet begonnen:</span>
                    <span className="sr-only"> </span>
                  </span>
                </span>
                <div className="denhaag-progress-list__content">
                  <p className="denhaag-progress-list__label">Intern overleg</p>
                </div>
              </li>
            </ol>
          </details>
        </li>

        <li className="denhaag-progress-list__item denhaag-progress-list__item--pending">
          <div className="denhaag-progress-list__step-row denhaag-progress-list__step-row--static">
            <span className="denhaag-progress-list__marker">
              <span className="denhaag-progress-list__dot denhaag-progress-list__dot--pending">
                <span aria-hidden="true">3</span>
                <span className="sr-only denhaag-progress-list__sr-pause">Nog niet begonnen:</span>
                <span className="sr-only"> </span>
              </span>
            </span>
            <div className="denhaag-progress-list__content">
              <p className="denhaag-progress-list__label">Voorlegging</p>
            </div>
          </div>
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
              <p className="denhaag-progress-list__label">Resultaat</p>
            </div>
          </div>
        </li>
      </ol>
    </>
  );
}
