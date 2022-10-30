import React from 'react';
import { WindowLocation } from '@reach/router';
import ContactFormDialog from '../Dialogs/ContactForm';
import Navbar from '../Navbar';
import LayoutProvider from './Context';

interface LayoutProps {
  logo?: StaticImage;
  location: WindowLocation<WindowLocation['state']>;
  children: React.ReactNode;
}

export default function Layout({ logo, location, children }: LayoutProps) {
  return (
    <LayoutProvider location={location}>
      <Navbar logo={logo} />
      {children}
      <ContactFormDialog />
    </LayoutProvider>
  );
}
