import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import './dropdownMenu.css';

const DropdownMenu = ({ regions, handleRegionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = (region) => {
    handleRegionChange(region);
    closeMenu();
  };

  return (
    <div className={darkMode ? 'dropdown dark-mode' : 'dropdown'}>
      <div onClick={toggleMenu} className="dropdown-toggle">
        <span className='filter-region'>Filter for Region</span>
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          ></path>
        </svg>
      </div>
      {isMenuOpen && (
        <div className={darkMode ? 'dropdownMenu dark-mode' : 'dropdownMenu'}>
          <div className="submenu">
            <div onClick={() => handleClick('All')}></div>
            {regions.map((region) => (
              <div className={darkMode ?  'regions dark-mode': 'regions'} key={region} onClick={() => handleClick(region)}>
                {region}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
