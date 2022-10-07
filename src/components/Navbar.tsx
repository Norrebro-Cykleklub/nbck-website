import React, { useEffect, useState, useCallback } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import NavbarInner from './NavbarInner';
import windowExist from './utils/windowExist';

interface NavbarProps {
  /** To override using windows's scroll position */
  scrollElement?: Nullable<HTMLDivElement>;
  logo?: StaticImage;
}

/** Has controlled breakpoints */
export default function Navbar({ logo, scrollElement }: NavbarProps) {
  const [stickyBackgroundVisibility, setStickyBackgroundVisibility] =
    useState(0);
  const pointOfMaxVisibility = 190;

  const handleStickyBackgroundVisibility = useCallback((): void => {
    if (!windowExist) {
      return;
    }

    const scrollPosition = scrollElement
      ? scrollElement.scrollTop
      : window.pageYOffset || document.documentElement.scrollTop;

    const scrollProgress = Math.min(scrollPosition, pointOfMaxVisibility);

    setStickyBackgroundVisibility(scrollProgress / pointOfMaxVisibility);
  }, [scrollElement]);

  // Perform an initial check of scrollposition to determine if sticky navbar should be visible
  useEffect(() => {
    handleStickyBackgroundVisibility();
  }, [handleStickyBackgroundVisibility]);

  useEffect(() => {
    if (!windowExist) {
      return;
    }

    const element = scrollElement || window;

    element.addEventListener('scroll', handleStickyBackgroundVisibility);
    return () =>
      element.removeEventListener('scroll', handleStickyBackgroundVisibility);
  }, [handleStickyBackgroundVisibility, scrollElement]);

  useEffect(() => {
    if (windowExist) {
      smoothscroll.polyfill();
    }
  }, []);

  return (
    <NavbarCss stickyBackgroundVisibility={stickyBackgroundVisibility}>
      <NavbarInner logo={logo} padding={25 - 25 * stickyBackgroundVisibility} />
    </NavbarCss>
  );
}

const NavbarCss = styled.div<{ stickyBackgroundVisibility: number }>`
  z-index: 3000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 25px 0;
  transition: all 0.1s ease;
  background-color: rgba(34, 34, 34, ${p => p.stickyBackgroundVisibility});
`;
