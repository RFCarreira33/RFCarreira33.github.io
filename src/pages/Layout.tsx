import React from 'react';
import NavBar from '../components/Navbar';
import { SITE_TITLE } from '../config';

const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  document.title = `${SITE_TITLE} ${title}`
  return (
    <div>
      <NavBar />
      <br />
      {children}
    </div>
  );
};

export default Layout;
