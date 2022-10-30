import React, { useMemo } from 'react';
import { createScrollIntoViewHandler } from '../helpers/scroll-into-view';
import { useBooleanState } from '../hooks/use-boolean-state';
import Link from './Link';
import Sidebar from './Sidebar';
import useSectionInView from '../hooks/use-section-in-view';
import ContentfulText from './ContentfulText';

interface NavbarProps {
  logo?: StaticImage;
  padding: number;
}

export default function NavbarInner({ logo, padding }: NavbarProps) {
  const [menuVisible, showMenu, hideMenu] = useBooleanState(false);
  const { inView } = useSectionInView();

  const navbarItems = useMemo(() => {
    return [
      { id: 'koncept', contentfulTextId: 0 },
      { id: 'foelgos', contentfulTextId: 1 },
      { id: 'klubliv', contentfulTextId: 2 },
      { id: 'medlem', contentfulTextId: 3 },
      { id: 'omOs', contentfulTextId: 4 },
    ].map(({ id, contentfulTextId }) => (
      <li
        key={id}
        className="nav-item"
        onClick={createScrollIntoViewHandler(id)}
      >
        <Link
          className={
            inView === id
              ? 'nav-link js-menu-trigger active'
              : 'nav-link js-menu-trigger'
          }
        >
          <ContentfulText id={contentfulTextId} />
        </Link>
      </li>
    ));
  }, [inView]);

  return (
    <>
      <Sidebar isOpen={menuVisible} close={hideMenu} />
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        style={{ paddingTop: padding, paddingBottom: padding }}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            onClick={createScrollIntoViewHandler('top')}
          >
            <img
              className="logo-responsive"
              src={logo?.childImageSharp.fluid.srcWebp}
              srcSet={logo?.childImageSharp.fluid.srcSetWebp}
              sizes={logo?.childImageSharp.fluid.sizes}
            />
          </Link>

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={menuVisible ? hideMenu : showMenu}
          >
            <ContentfulText id={68} /> <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">{navbarItems}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}
