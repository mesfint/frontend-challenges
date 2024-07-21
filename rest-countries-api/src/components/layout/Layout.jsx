import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../App.css';

const Layout = () => {
  return (
    <main className='container'>
      <header className="header">
        <p>Where in the world?</p>
        <p>Dark Mode</p>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;
