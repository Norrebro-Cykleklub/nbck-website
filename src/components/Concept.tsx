import React from 'react';
import styleHelpers from '../helpers/style-helpers';
import useScrollIntoView from '../hooks/use-scroll-into-view';
import useSectionInView from '../hooks/use-section-in-view';
import { useLayoutContext } from './Layout/Context';
import Link from './Link';
import WithHover from './WithHover';

export default function ConceptSection() {
  const { contactForm } = useLayoutContext();
  const scrollIntoView = useScrollIntoView();
  const { ref } = useSectionInView('koncept');

  return (
    <section className="bg-light" id="koncept" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Koncept</h2>
            <hr />
            <h3 className="section-subheading text-muted">
              Nørrebro Cykleklub bygger på tre grundlæggende idéer:
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 konceptvalue">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-users fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Cykelfællesskab</h4>
            <p
              className="text-muted"
              style={{ ...styleHelpers.childrenSameLine }}
            >
              Nørrebro Cykleklub er først og fremmest et{' '}
              <span className="highlighted">fællesskab</span> for alle, der
              elsker at cykle. Vi favner eliterytteren, der træner mange timer
              om ugen og kører væddeløb i weekenden, og motionisten, der gennem
              struktureret træning vil blive en endnu bedre rytter i godt
              selskab. Har du lyst til at blive medlem?
              <WithHover onClick={scrollIntoView('medlem')}>
                <span style={{ color: '#1b9400' }}> Læs mere her</span>
              </WithHover>
            </p>
          </div>
          <div className="col-md-4 konceptvalue">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-coffee fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Hygge</h4>
            <p className="text-muted">
              Vi har det godt med hinanden, holder en{' '}
              <span className="highlighted">god tone</span> og opfører os
              ordentlig overfor hinanden og andre. I Nørrebro Cykleklub handler
              det i høj grad også om at have det sjovt, når vi ikke sidder på
              cyklen. Det er lirens at være en god kammerat.
            </p>
          </div>
          <div className="col-md-4 konceptvalue">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-rocket fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Nytænkende</h4>
            <p
              className="text-muted"
              style={{ ...styleHelpers.childrenSameLine }}
            >
              I Nørrebro Cykleklub er det muligt at føre sine{' '}
              <span className="highlighted">idéer</span> ud i livet. Der er
              plads til nytænkning, og vi er ikke bundet af normer for hvordan
              en cykleklub skal fungere. Fokus er altid at skabe de bedste
              betingelser for et sjovt og spændende cykelfællesskab.
              Interesseret i et samarbejde? Så{' '}
              <Link
                className="kontaktOsLink"
                onClick={contactForm.show}
                style={{ color: '#1b9400' }}
              >
                skriv
              </Link>{' '}
              til os
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <Link
                  onClick={scrollIntoView('omOs')}
                  style={{ color: '#1b9400' }}
                >
                  Læs mere om os
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
