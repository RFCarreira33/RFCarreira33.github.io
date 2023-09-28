import React from 'react';
import NavBar from '../components/Navbar';
import { SITE_TITLE } from '../config';
import Footer from '../components/Footer';

const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  document.title = `${SITE_TITLE} ${title}`
  return (
    <div>
      <NavBar />
      <br />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
