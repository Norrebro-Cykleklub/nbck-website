import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createScrollIntoViewHandler } from '../helpers/scroll-into-view';
import useResizeObserver from '../hooks/use-resize-observer';
import windowSafe from './utils/windowSafe';
import WithHover from './WithHover';

interface HeaderProps {
  images: StaticImage[];
}

export default function Header({ images }: HeaderProps) {
  const [windowSize, setObservedElement] = useResizeObserver({
    throttleInterval: 500,
  });
  const [dynamicHeaderHeight, setDynamicHeaderHeight] = useState(
    windowSafe?.innerHeight ?? 1000,
  );

  useEffect(() => {
    if (windowSafe) {
      setObservedElement(windowSafe.document.body);
    }
  }, [setObservedElement]);

  useEffect(() => {
    if (windowSize?.height) {
      setDynamicHeaderHeight(windowSize.height);
    }
  }, [windowSize?.height]);

  const nbckLogo = images.find(img => img.name === 'Norrebro_logo');

  return (
    <HeaderCss className="masthead" height={dynamicHeaderHeight}>
      <div className="container">
        <div className="intro-text">
          <img
            className="img-responsive"
            src={nbckLogo?.childImageSharp.fluid.src}
          />
        </div>
      </div>
      <CircleButtonContainerCss>
        <WithHoverCss onClick={createScrollIntoViewHandler('koncept')}>
          <CircleButtonCss>
            <ArrowCss />
          </CircleButtonCss>
        </WithHoverCss>
      </CircleButtonContainerCss>
    </HeaderCss>
  );
}

const HeaderCss = styled.header<{ height: number }>`
  width: 100%;
  height: ${p => p.height}px;
`;

const WithHoverCss = styled(WithHover)`
  display: inline-flex;
`;

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
