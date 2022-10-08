import React, { useEffect, useState } from 'react';
import useScrollIntoView from '../hooks/scroll-into-view';
import useResizeObserver from '../hooks/use-resize-observer';
import Link from './Link';
import windowSafe from './utils/windowSafe';

interface HeaderProps {
  images: StaticImage[];
}

export default function Header({ images }: HeaderProps) {
  const scrollIntoView = useScrollIntoView();
  const [windowSize, setObservedElement] = useResizeObserver({
    throttleInterval: 500,
  });
  const [dynamicHeaderHeight, setDynamicHeaderHeight] = useState(
    windowSafe?.innerHeight ?? 0,
  );

  useEffect(() => {
    const bodyNode = windowSafe?.document.body;

    if (!windowSize && bodyNode) {
      setObservedElement(bodyNode);
    }

    if (windowSize) {
      setDynamicHeaderHeight(windowSize.height);
    }
  }, [setObservedElement, windowSize]);

  const nbckLogo = images.find(img => img.name === 'Norrebro_logo');
  const headerHeight = dynamicHeaderHeight ?? windowSafe?.innerHeight ?? 0;

  return (
    <header className="masthead" style={{ height: headerHeight }}>
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
