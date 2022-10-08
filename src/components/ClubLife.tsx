import React from 'react';
import useSectionInView from '../hooks/use-section-in-view';
import { useLayoutContext } from './Layout/Context';
import Link from './Link';

interface ClubLifeSectionProps {
  images: StaticImage[];
}

export default function ClubLifeSection({ images }: ClubLifeSectionProps) {
  const { contactForm } = useLayoutContext();
  const { ref } = useSectionInView('klubliv');

  const training = images.find(img => img.name === 'training');
  const races = images.find(img => img.name === 'races');
  const travels = images.find(img => img.name === 'travels');

  return (
    <section
      className="bg-light"
      id="klubliv"
      ref={ref}
      style={{ overflow: 'hidden' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Klubliv</h2>
            <hr />
            <h3 className="section-subheading text-muted">
              Herunder kan du læse om, hvad der sker sig i Nørrebro Cykleklub
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 klubliv-item">
            <Link className="klubliv-link">
              <div className="klubliv-hover">
                <div className="klubliv-hover-content">
                  <h4>Fællestræning</h4>
                </div>
              </div>
              <img
                className="img-fluid"
                src={training?.childImageSharp.fluid.src}
                srcSet={training?.childImageSharp.fluid.srcSet}
                alt=""
                style={{ width: '100%' }}
              />
            </Link>
          </div>
          <div className="col-md-4 col-sm-6 klubliv-item">
            <Link className="klubliv-link">
              <div className="klubliv-hover">
                <div className="klubliv-hover-content">
                  <h4>Cykelløb</h4>
                </div>
              </div>
              <img
                className="img-fluid"
                src={races?.childImageSharp.fluid.src}
                srcSet={races?.childImageSharp.fluid.srcSet}
                alt=""
                style={{ width: '100%' }}
              />
            </Link>
          </div>
          <div className="col-md-4 col-sm-6 klubliv-item">
            <Link className="klubliv-link">
              <div className="klubliv-hover">
                <div className="klubliv-hover-content">
                  <h4>Rejser</h4>
                </div>
              </div>
              <img
                className="img-fluid"
                src={travels?.childImageSharp.fluid.src}
                srcSet={travels?.childImageSharp.fluid.srcSet}
                alt=""
                style={{ width: '100%' }}
              />
            </Link>
          </div>
        </div>
        <div className="row interestedProjects">
          <div className="col-md-12 text-center">
            <p className="projects-interested text-muted">
              Interesseret i et samarbejde? Så{' '}
              <Link onClick={contactForm.show} style={{ color: '#1b9400' }}>
                skriv
              </Link>{' '}
              til os
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
