import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { WindowLocation } from '@reach/router';
import { useBooleanState } from '../../hooks/use-boolean-state';

interface ContextProviderProps {
  location?: WindowLocation<WindowLocation['state']>;
  children: ReactNode;
}

export type Sections = Nullable<
  'koncept' | 'foelgos' | 'klubliv' | 'medlem' | 'omOs'
>;

interface LayoutContextProps {
  debug: boolean;
  sectionInView: {
    id: Sections;
    set: React.Dispatch<React.SetStateAction<Sections>>;
  };
  contactForm: {
    visible: boolean;
    show: () => void;
    hide: () => void;
  };
}

const LayoutContext = createContext<LayoutContextProps>({
  debug: false,
  sectionInView: {
    id: null,
    set: () => null,
  },
  contactForm: {
    visible: false,
    show: () => null,
    hide: () => null,
  },
});

export const useLayoutContext = () => useContext(LayoutContext);

export default function LayoutProvider(props: ContextProviderProps) {
  const [sectionInView, setSectionInView] = useState(null as Sections);
  const [contactFormVisible, showContactForm, hideContactForm] =
    useBooleanState(false);

  const debug = props.location?.search
    ? new URLSearchParams(props.location.search).get('debug') === 'string'
    : false;

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => ({
          debug,
          sectionInView: {
            id: sectionInView,
            set: setSectionInView,
          },
          contactForm: {
            visible: contactFormVisible,
            show: showContactForm,
            hide: hideContactForm,
          },
        }),
        [
          contactFormVisible,
          debug,
          hideContactForm,
          sectionInView,
          showContactForm,
        ],
      )}
    >
      {props.children}
    </LayoutContext.Provider>
  );
}
