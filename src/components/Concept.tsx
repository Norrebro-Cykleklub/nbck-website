import React from 'react';
import useScrollIntoView from '../hooks/scroll-into-view';
import Link from './Link';

export default function ConceptSection() {
  const scrollIntoView = useScrollIntoView();
  const openContactForm = (event: OnClickAnchorEvent) => {};

  return (
    <section className="bg-light" id="koncept">
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
            <p className="text-muted">
              Nørrebro Cykleklub er først og fremmest et{' '}
              <span className="highlighted">fællesskab</span> for alle, der
              elsker at cykle. Vi favner eliterytteren, der træner mange timer
              om ugen og kører væddeløb i weekenden, og motionisten, der gennem
              struktureret træning vil blive en endnu bedre rytter i godt
              selskab. Har du lyst til at blive medlem?{' '}
              <Link onClick={scrollIntoView('medlem')}>Læs mere her</Link>
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
            <p className="text-muted">
              I Nørrebro Cykleklub er det muligt at føre sine{' '}
              <span className="highlighted">idéer</span> ud i livet. Der er
              plads til nytænkning, og vi er ikke bundet af normer for hvordan
              en cykleklub skal fungere. Fokus er altid at skabe de bedste
              betingelser for et sjovt og spændende cykelfællesskab.
              Interesseret i et samarbejde? Så{' '}
              <Link className="kontaktOsLink" onClick={openContactForm}>
                Skriv
              </Link>{' '}
              til os
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a onClick={scrollIntoView('omOs')}>Læs mere om os</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
