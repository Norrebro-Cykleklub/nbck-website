import React from 'react';
import useScrollIntoView from '../hooks/use-scroll-into-view';
import { useBooleanState } from '../hooks/use-boolean-state';
import Link from './Link';
import Sidebar from './Sidebar';
import useSectionInView from '../hooks/use-section-in-view';

interface NavbarProps {
  logo?: StaticImage;
  padding: number;
}

export default function NavbarInner({ logo, padding }: NavbarProps) {
  const [menuVisible, showMenu, hideMenu] = useBooleanState(false);
  const scrollIntoView = useScrollIntoView();
  const { inView } = useSectionInView();

  return (
    <>
      <Sidebar isOpen={menuVisible} close={hideMenu} />
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        style={{ paddingTop: padding, paddingBottom: padding }}
      >
        <div className="container">
          <Link className="navbar-brand" onClick={scrollIntoView('top')}>
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
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {[
                { id: 'koncept', text: 'Koncept' },
                { id: 'foelgos', text: 'Følg' },
                { id: 'klubliv', text: 'Klubliv' },
                { id: 'medlem', text: 'Medlem' },
                { id: 'omOs', text: 'Om os' },
              ].map(({ id, text }) => (
                <li key={id} className="nav-item" onClick={scrollIntoView(id)}>
                  <Link
                    className={
                      inView === id
                        ? 'nav-link js-menu-trigger active'
                        : 'nav-link js-menu-trigger'
                    }
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
