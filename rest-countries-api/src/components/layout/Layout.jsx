import React, { useContext } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { Outlet } from 'react-router-dom';
import '../../App.css';
import { DarkModeContext } from '../../context/DarkModeContext';


const Layout = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return (
    <div className={ darkMode ? 'container dark-mode' : 'container'}>
      <header className={darkMode ?  "header dard-mode" : "header"}>
        <p>Where in the world?</p>
       
        <button className='dark-light-toggler' onClick={toggleDarkMode}> <MdOutlineLightMode/> {darkMode ? 'Light Mode': 'Dark Mode'}</button>
      </header>
      <main className={ darkMode ? 'content dark-mode': 'content'}>
     <Outlet />
    </main>
    </div>
  );
};

export default Layout;
