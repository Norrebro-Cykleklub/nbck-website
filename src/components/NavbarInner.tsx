import React from 'react';
import useScrollIntoView from '../hooks/scroll-into-view';
import { useBooleanState } from '../hooks/use-boolean-state';
import Link from './Link';
import Sidebar from './Sidebar';

interface NavbarProps {
  images: StaticImage[];
  padding: number;
}

export default function NavbarInner({ images, padding }: NavbarProps) {
  const [menuVisible, showMenu, hideMenu] = useBooleanState(false);
  const scrollIntoView = useScrollIntoView();
  const logoSimple = images.find(img => img.name === 'logo_simple');

  return (
    <>
      <Sidebar isOpen={menuVisible} close={hideMenu} />
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        style={{ paddingTop: padding, paddingBottom: padding }}
        onClick={showMenu}
      >
        <div className="container">
          <Link className="navbar-brand" onClick={scrollIntoView('top')}>
            <img
              className="logo-responsive"
              src={logoSimple?.childImageSharp.fluid.srcWebp}
              srcSet={logoSimple?.childImageSharp.fluid.srcSetWebp}
              sizes={logoSimple?.childImageSharp.fluid.sizes}
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
              <li className="nav-item">
                <Link
                  className="nav-link js-menu-trigger"
                  onClick={scrollIntoView('koncept')}
                >
                  Koncept
                </Link>
              </li>
              <li className="nav-item" onClick={scrollIntoView('foelgos')}>
                <Link className="nav-link js-menu-trigger">Følg</Link>
              </li>
              <li className="nav-item" onClick={scrollIntoView('klubliv')}>
                <Link className="nav-link js-menu-trigger">Klubliv</Link>
              </li>
              <li className="nav-item" onClick={scrollIntoView('medlem')}>
                <Link className="nav-link js-menu-trigger">Medlem</Link>
              </li>
              <li className="nav-item" onClick={scrollIntoView('omOs')}>
                <Link className="nav-link js-menu-trigger">Om os</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
