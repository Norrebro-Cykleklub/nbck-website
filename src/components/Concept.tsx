import React from 'react';
import styleHelpers from '../helpers/style-helpers';
import { createScrollIntoViewHandler } from '../helpers/scroll-into-view';
import useSectionInView from '../hooks/use-section-in-view';
import { useLayoutContext } from './Layout/Context';
import Link from './Link';
import WithHover from './WithHover';
import ContentfulText from './ContentfulText';

export default function ConceptSection() {
  const { contactForm } = useLayoutContext();
  const { ref } = useSectionInView('koncept');

  return (
    <section className="bg-light" id="koncept" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">
              <ContentfulText id={5} />
            </h2>
            <hr />
            <h3 className="section-subheading text-muted">
              <ContentfulText id={6} />
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 konceptvalue">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-users fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">
              <ContentfulText id={7} />
            </h4>
            <p
              className="text-muted"
              style={{ ...styleHelpers.childrenSameLine }}
            >
              <ContentfulText id={8} />{' '}
              <span className="highlighted">
                <ContentfulText id={9} />
              </span>{' '}
              <ContentfulText id={10} />
              <WithHover onClick={createScrollIntoViewHandler('medlem')}>
                <span style={{ color: '#1b9400' }}>
                  {' '}
                  <ContentfulText id={11} />
                </span>
              </WithHover>
            </p>
          </div>
          <div className="col-md-4 konceptvalue">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-coffee fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">
              <ContentfulText id={12} />
            </h4>
            <p className="text-muted">
              <ContentfulText id={13} />{' '}
              <span className="highlighted">
                <ContentfulText id={14} />
              </span>{' '}
              <ContentfulText id={15} />
            </p>
          </div>
          <div className="col-md-4 konceptvalue">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-rocket fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">
              <ContentfulText id={16} />
            </h4>
            <p
              className="text-muted"
              style={{ ...styleHelpers.childrenSameLine }}
            >
              <ContentfulText id={17} />{' '}
              <span className="highlighted">
                <ContentfulText id={18} />
              </span>{' '}
              <ContentfulText id={19} />{' '}
              <Link
                className="kontaktOsLink"
                onClick={contactForm.show}
                style={{ color: '#1b9400' }}
              >
                <ContentfulText id={20} />
              </Link>{' '}
              <ContentfulText id={21} />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <Link
                  onClick={createScrollIntoViewHandler('omOs')}
                  style={{ color: '#1b9400' }}
                >
                  <ContentfulText id={22} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
