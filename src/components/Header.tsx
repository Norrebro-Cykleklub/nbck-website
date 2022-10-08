import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useScrollIntoView from '../hooks/scroll-into-view';
import useResizeObserver from '../hooks/use-resize-observer';
import Link from './Link';
import windowSafe from './utils/windowSafe';
import WithHover from './WithHover';

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

      <WithHover onClick={scrollIntoView('koncept')}>
        <CircleButtonContainerCss>
          <CircleButtonCss>
            <ArrowCss />
          </CircleButtonCss>
        </CircleButtonContainerCss>
      </WithHover>
    </header>
  );
}

const CircleButtonContainerCss = styled.div`
  padding-bottom: 85px;
  padding-top: 25px;
`;

const CircleButtonCss = styled.div`
  position: relative;
  margin: auto;
  width: 65px;
  height: 65px;
  transition: background 0.3s ease-in-out;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 100% !important;
  background: transparent;
  margin-top: 15px;
  line-height: 38px;
`;

const ArrowCss = styled.i`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font: normal normal normal 14px/1 FontAwesome;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
  font-size: 46px;

  &:before {
    box-sizing: inherit;
    content: '';
  }
`;
