import React from 'react';
import useSectionInView from '../hooks/use-section-in-view';
import ContentfulText from './ContentfulText';
import Link from './Link';

export default function FollowUsSection() {
  const { ref } = useSectionInView('foelgos');

  return (
    <section className="bg-dark" id="foelgos" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">
              <ContentfulText id={23} />
            </h2>
            <hr />
            <h3 className="section-subheading text-muted">
              <ContentfulText id={24} />
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
                  href="https://www.facebook.com/groups/1999819213570632"
                >
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  className="instagram"
                  target="_blank"
                  href="https://www.instagram.com/norrebro_cykleklub/"
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
