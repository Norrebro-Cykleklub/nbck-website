import React, { useCallback, useState } from 'react';
import styleHelpers from '../helpers/style-helpers';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import useLockBodyScroll from '../hooks/use-lock-body-scroll';
import useScrollIntoView from '../hooks/use-scroll-into-view';

const styles = {
  modal: (backdropVisible: boolean) => {
    return {
      zIndex: 3001,
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      visibility: backdropVisible ? 'unset' : 'hidden',
    };
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '-1',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  sidebar: {
    ...styleHelpers.noSelect,
    background: '#1a1a1a',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '90%',
    maxWidth: 618,
    height: '100%',
    display: 'grid',
    justifyContent: 'space-between',
    overflowY: 'auto',
    menu: {
      display: 'flex',
      flexDirection: 'column',
      padding: '32px',
      marginBottom: '80px',
      item: {
        display: 'inline-flex',
        textTransform: 'uppercase',
        a: {
          color: '#fff',
          textDecoration: 'none',

          '&:hover': {
            textDecoration: 'underline',
          },
        },
        link: {
          color: '#fff',
          textDecoration: 'none !important',
          ...styleHelpers.hoverEffect,
        },
      },
    },
  },
};

interface ItemProps {
  text: string;
  onClick: () => void;
}

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
}

/** Has controlled breakpoints */
export default function Sidebar({ isOpen, close }: SidebarProps) {
  const scrollIntoView = useScrollIntoView();
  const [backdropVisible, setBackdropVisible] = useState(false);
  const [lockBodyScroll, setLockBodyScroll] = useState(false);
  const { setRef: setLockBodyScrollRef } = useLockBodyScroll({
    enabled: lockBodyScroll,
  });

  const handleBackdrop = useCallback((visible: boolean): void => {
    setBackdropVisible(visible);
    setLockBodyScroll(visible);
  }, []);

  const Item = useCallback(
    ({ text, onClick }: ItemProps): JSX.Element => {
      return (
        <div style={styles.sidebar.menu.item as React.CSSProperties}>
          <li
            className="nav-item"
            onClick={() => {
              close();
              onClick();
            }}
          >
            <a
              className="nav-link js-menu-trigger"
              style={{ color: '#b6b6b6' }}
            >
              {text}
            </a>
          </li>
        </div>
      );
    },
    [close],
  );

  const timeout = 700;

  return (
    <div
      style={{
        ...(styles.modal(backdropVisible) as React.CSSProperties),
      }}
    >
      <Fade
        in={isOpen}
        timeout={timeout}
        onEntering={() => handleBackdrop(true)}
        onExited={() => handleBackdrop(false)}
      >
        <div onClick={close} style={styles.backdrop as React.CSSProperties} />
      </Fade>

      <Slide in={isOpen} timeout={timeout} direction="left">
        <div
          ref={setLockBodyScrollRef}
          style={styles.sidebar as React.CSSProperties}
        >
          <div style={styles.sidebar.menu as React.CSSProperties}>
            <Item text="Koncept" onClick={scrollIntoView('koncept')} />
            <Item text="Følg" onClick={scrollIntoView('foelgos')} />
            <Item text="Klubliv" onClick={scrollIntoView('klubliv')} />
            <Item text="Medlem" onClick={scrollIntoView('medlem')} />
            <Item text="Om os" onClick={scrollIntoView('omOs')} />
          </div>
        </div>
      </Slide>
    </div>
  );
}
