import React from 'react';
import ContactFormDialog from '../Dialogs/ContactForm';
import Navbar from '../Navbar';
import LayoutProvider from './Context';

interface LayoutProps {
  logo?: StaticImage;
  children: React.ReactNode;
}

export default function Layout({ logo, children }: LayoutProps) {
  return (
    <LayoutProvider>
      <Navbar logo={logo} />
      {children}
      <ContactFormDialog />
    </LayoutProvider>
  );
}
