import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import '../../App.css';
import { DarkModeContext } from '../../context/DarkModeContext';


const Layout = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return (
    <div className={ darkMode ? 'container dark-mode' : 'container'}>
      <header className="header">
        <p>Where in the world?</p>
        <button className='dark-light-toggler' onClick={toggleDarkMode}>{darkMode ? 'Light Mode': 'Dark Mode'}</button>
      </header>
      <main>
     <Outlet />
    </main>
    </div>
  );
};

export default Layout;
