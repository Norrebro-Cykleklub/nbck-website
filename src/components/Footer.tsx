import React from 'react';
import { useBooleanState } from '../hooks/use-boolean-state';
import ContentfulText from './ContentfulText';
import ContentfulDocumentDialog from './Dialogs/ContentfulDocumentDialog';
import Link from './Link';

export default function FooterSection() {
  const [privacyPolicyVisible, openPrivacyPolicy, closePrivacyPolicy] =
    useBooleanState(false);

  return (
    <>
      <ContentfulDocumentDialog
        id="privacyPolicy"
        textAlign="left"
        visible={privacyPolicyVisible}
        onClose={closePrivacyPolicy}
      />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <span className="copyright">
                © Nørrebro Cykleklub {new Date().getFullYear()}
              </span>
            </div>
            <div className="col-md-2">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/norrebro_cykleklub/"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/groups/1999819213570632"
                  >
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item" style={{ marginRight: 0 }}>
                  <Link
                    onClick={openPrivacyPolicy}
                    style={{ color: '#1b9400' }}
                  >
                    <ContentfulText id={57} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
