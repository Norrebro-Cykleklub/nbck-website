import React from 'react';
import { useBooleanState } from '../hooks/use-boolean-state';
import useSectionInView from '../hooks/use-section-in-view';
import ContentfulText from './ContentfulText';
import ContentfulDocumentDialog from './Dialogs/ContentfulDocumentDialog';
import { useLayoutContext } from './Layout/Context';
import Link from './Link';

export default function AboutUsSection() {
  const { contactForm } = useLayoutContext();
  const { ref } = useSectionInView('omOs');
  const [bylawsVisible, openBylawsDialog, closeBylawsDialog] =
    useBooleanState(false);
  const [
    regulationsDialogVisible,
    openRegulationsDialog,
    closeRegulationsDialog,
  ] = useBooleanState(false);

  return (
    <>
      <ContentfulDocumentDialog
        id="bylaws"
        textAlign="left"
        visible={bylawsVisible}
        onClose={closeBylawsDialog}
      />
      <ContentfulDocumentDialog
        id="regulations"
        textAlign="left"
        visible={regulationsDialogVisible}
        onClose={closeRegulationsDialog}
      />
      <section className="bg-light" id="omOs" ref={ref}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">
                <ContentfulText id={44} />
              </h2>
              <hr />
              <h3 className="section-subheading text-muted">
                <ContentfulText id={45} />
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 konceptvalue">
              <h4 className="service-heading">
                <ContentfulText id={46} />
              </h4>
              <p className="text-muted">
                <ContentfulText id={47} />
              </p>
            </div>
            <div className="col-md-6 konceptvalue">
              <h4 className="service-heading">
                <ContentfulText id={48} />
              </h4>
              <p className="text-muted">
                <ContentfulText id={49} />
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 kontaktOsSection">
              <h4 className="service-heading">
                <ContentfulText id={50} />
              </h4>
              <p className="text-muted">
                <ContentfulText id={51} />
              </p>
              <button
                className="btn btn-xl kontaktOsButton"
                onClick={contactForm.show}
              >
                <ContentfulText id={52} />
              </button>
            </div>
            <div className="col-md-6 text-center kontaktOsSection">
              <h4 className="service-heading">
                <ContentfulText id={53} />
              </h4>
              <p className="text-muted">
                <ContentfulText id={54} />
              </p>
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <Link
                    onClick={openRegulationsDialog}
                    style={{ color: '#1936f7' }}
                  >
                    <ContentfulText id={55} />
                  </Link>
                </li>

                <li className="list-inline-item">
                  <Link onClick={openBylawsDialog} style={{ color: '#1936f7' }}>
                    <ContentfulText id={56} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
