import React from 'react';
import Link from './Link';

export default function FooterSection() {
  const openPrivacyPolicy = (event: OnClickAnchorEvent) => {};
  const openTos = (event: OnClickAnchorEvent) => {};

  return (
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
                  href="https://www.instagram.com/norrebro_ck"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/NorrebroCK"
                >
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <Link onClick={openPrivacyPolicy} style={{ color: '#1b9400' }}>
                  Privatlivspolitik
                </Link>
              </li>
              <li className="list-inline-item">
                <Link onClick={openTos} style={{ color: '#1b9400' }}>
                  Vilkår for brug
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
