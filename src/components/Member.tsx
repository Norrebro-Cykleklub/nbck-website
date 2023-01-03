import React from 'react';
import { useBooleanState } from '../hooks/use-boolean-state';
import useSectionInView from '../hooks/use-section-in-view';
import ContentfulText from './ContentfulText';
import PriceBenefitsDialog from './Dialogs/PriceBenefits';
import Link from './Link';

export default function MemberSection() {
  const { ref } = useSectionInView('medlem');
  const [priceBenefitsVisible, openPriceBenefits, closePriceBenefits] =
    useBooleanState(false);

  return (
    <>
      <PriceBenefitsDialog
        visible={priceBenefitsVisible}
        onClose={closePriceBenefits}
      />
      <section className="bg-dark" id="medlem" ref={ref}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">
                <ContentfulText id={33} />
              </h2>
              <hr />
              <h3 className="section-subheading text-muted-white">
                <ContentfulText id={34} />
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p className="text-muted-white">
                <strong>
                  <ContentfulText id={35} />
                </strong>{' '}
                <ContentfulText id={36} />
              </p>
              <ul
                className="text-muted-white"
                style={{ marginTop: '1rem', lineHeight: '1.75' }}
              >
                <li>
                  <ContentfulText id={37} />
                </li>
                <li>
                  <ContentfulText id={38} />
                </li>
                <li>
                  <ContentfulText id={39} />
                </li>
                <li>
                  <ContentfulText id={40} />
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="row text-center">
                <div className="col-md-12">
                  <p className="text-muted-white">
                    <ContentfulText id={41} />
                  </p>
                  <Link
                    href="https://www.holdsport.dk/team_invitation/210786/c68090cb68c48920a7f58ebfffa79a0c3ddda228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-xl"
                  >
                    <ContentfulText id={42} />
                  </Link>
                </div>
                <div className="col-md-12 medlemInfoSection">
                  <Link
                    onClick={openPriceBenefits}
                    style={{ color: '#1b9400' }}
                  >
                    <ContentfulText id={43} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
