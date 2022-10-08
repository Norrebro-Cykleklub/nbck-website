import React from 'react';
import { useBooleanState } from '../hooks/use-boolean-state';
import ContentfulDocumentDialog from './Dialogs/ContentfulDocumentDialog';
import { useLayoutContext } from './Layout/Context';
import Link from './Link';

export default function AboutUsSection() {
  const { contactForm } = useLayoutContext();
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
        textAlign="center"
        visible={bylawsVisible}
        onClose={closeBylawsDialog}
      />
      <ContentfulDocumentDialog
        id="regulations"
        textAlign="left"
        visible={regulationsDialogVisible}
        onClose={closeRegulationsDialog}
      />
      <section className="bg-light" id="omOs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Om os</h2>
              <hr />
              <h3 className="section-subheading text-muted">
                Hvem er Nørrebro Cykleklub?
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 konceptvalue">
              <h4 className="service-heading">Fødslen</h4>
              <p className="text-muted">
                Nørrebro Cykleklub blev stiftet i efteråret 2017 af en blandet
                flok cykelentusiaster, alle med lysten til at skabe et
                inkluderende cykelfællesskab.
              </p>
            </div>
            <div className="col-md-6 konceptvalue">
              <h4 className="service-heading">Formål</h4>
              <p className="text-muted">
                Nørrebro Cykleklub er et cykelfællesskab med base i København.
                Klubben er en frivillig forening, der har til formål at skabe de
                bedste rammer for cykling for dens medlemmer. Vi dyrker primært
                landevejscykling, men der er også åbent for andre former for
                cykling, fx MTB og cross.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 kontaktOsSection">
              <h4 className="service-heading">Kontakt</h4>
              <p className="text-muted">
                Vi vil meget gerne høre fra dig, hvis du har spørgsmål eller
                noget andet på hjerte. Åben kontakt formularen her:
              </p>
              <button
                className="btn btn-xl kontaktOsButton"
                onClick={contactForm.show}
              >
                Kontakt
              </button>
            </div>
            <div className="col-md-6 text-center kontaktOsSection">
              <h4 className="service-heading">Andet</h4>
              <p className="text-muted">
                Er du interesseret i uddybning og detaljerne om Nørrebro
                Cykleklub, så læs vores reglement eller vedtægter her:
              </p>
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <Link
                    onClick={openRegulationsDialog}
                    style={{ color: '#1b9400' }}
                  >
                    Reglement
                  </Link>
                </li>

                <li className="list-inline-item">
                  <Link onClick={openBylawsDialog} style={{ color: '#1b9400' }}>
                    Vedtægter
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
