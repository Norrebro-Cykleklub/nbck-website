import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { createScrollIntoViewHandler } from '../helpers/scroll-into-view';
import useResizeObserver from '../hooks/use-resize-observer';
import windowSafe from './utils/windowSafe';
import WithHover from './WithHover';

interface HeaderProps {
  images: StaticImage[];
}

export default function Header({ images }: HeaderProps) {
  const [dynamicHeaderHeight, setDynamicHeaderHeight] = useState(1000);
  const [windowSize, _setObservedElement] = useResizeObserver({
    throttleInterval: 500,
  });

  const setObservedElement = useCallback(
    () => _setObservedElement(windowSafe?.document.body),
    [_setObservedElement],
  );

  useEffect(() => {
    setDynamicHeaderHeight(windowSafe?.innerHeight ?? 1000);
  }, [
    /** Keep so header height will update on window size updates */
    windowSize,
  ]);

  const nbckLogo = images.find(img => img.name === 'Norrebro_logo');

  return (
    <HeaderCss
      className="masthead"
      dynamicHeaderHeight={dynamicHeaderHeight}
      ref={setObservedElement}
    >
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

const HeaderCss = styled.header<{ dynamicHeaderHeight: number }>`
  width: 100%;
  height: ${p => p.dynamicHeaderHeight}px !important;
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
