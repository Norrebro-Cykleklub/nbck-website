import React from 'react';
import useScrollIntoView from '../hooks/scroll-into-view';
import Link from './Link';
import windowSafe from './utils/windowSafe';

interface HeaderProps {
  images: StaticImage[];
}

export default function Header({ images }: HeaderProps) {
  const scrollIntoView = useScrollIntoView();
  const nbckLogo = images.find(img => img.name === 'Norrebro_logo');

  return (
    <header
      className="masthead"
      style={{ height: windowSafe?.innerHeight ?? 0 }}
    >
      <div className="container">
        <div className="intro-text">
          <img
            className="img-responsive"
            src={nbckLogo?.childImageSharp.fluid.src}
          />
        </div>
      </div>
      <div className="circleButtonDiv">
        <Link
          className="btn btn-circle js-scroll-trigger"
          onClick={scrollIntoView('koncept')}
        >
          <i className="fa fa-angle-double-down animated"></i>
        </Link>
      </div>
    </header>
  );
}
