import React, { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
