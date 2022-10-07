import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { useBooleanState } from '../../hooks/use-boolean-state';

interface ContextProviderProps {
  children: ReactNode;
}

interface LayoutContextProps {
  contactForm: {
    visible: boolean;
    show: () => void;
    hide: () => void;
  };
}

const LayoutContext = createContext<LayoutContextProps>({
  contactForm: {
    visible: false,
    show: () => null,
    hide: () => null,
  },
});

export const useLayoutContext = () => useContext(LayoutContext);

export default function LayoutProvider(props: ContextProviderProps) {
  const [contactFormVisible, showContactForm, hideContactForm] =
    useBooleanState(false);

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => ({
          contactForm: {
            visible: contactFormVisible,
            show: showContactForm,
            hide: hideContactForm,
          },
        }),
        [contactFormVisible, hideContactForm, showContactForm],
      )}
    >
      {props.children}
    </LayoutContext.Provider>
  );
}
