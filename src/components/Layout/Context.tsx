import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useBooleanState } from '../../hooks/use-boolean-state';

interface ContextProviderProps {
  children: ReactNode;
}

export type Sections = Nullable<
  'koncept' | 'foelgos' | 'klubliv' | 'medlem' | 'omOs'
>;

interface LayoutContextProps {
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

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => ({
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
        [contactFormVisible, hideContactForm, sectionInView, showContactForm],
      )}
    >
      {props.children}
    </LayoutContext.Provider>
  );
}
