import React from 'react';
import Link from './Link';

export default function FollowUsSection() {
  return (
    <section className="bg-dark" id="foelgos">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Følg os</h2>
            <hr />
            <h3 className="section-subheading text-muted">
              Følg Nørrebro Cykleklub der hvor det passer dig:
            </h3>
          </div>
        </div>
        <div className="row text-center foelgOsButtons">
          <div className="col-12">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <Link
                  className="facebook"
                  target="_blank"
                  href="https://www.facebook.com/NorrebroCK"
                >
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  className="instagram"
                  target="_blank"
                  href="https://www.instagram.com/norrebro_ck"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  className="strava-logo"
                  target="_blank"
                  href="https://www.strava.com/clubs/NorrebroCK"
                >
                  <i className="fa-brands fa-strava"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
