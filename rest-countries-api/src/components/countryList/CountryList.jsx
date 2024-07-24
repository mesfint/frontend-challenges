

import React, { useContext, useEffect, useState } from 'react';
import { LuLoader2 } from "react-icons/lu";
import { DarkModeContext } from '../../context/DarkModeContext';
import Country from '../country/Country';
import DropdownMenu from '../dropdown/DropdownMenu';
import './countryList.css';


const CountryList = ({ countries, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [region, setRegion] = useState('All');

  const { darkMode, getPlaceholderText } = useContext(DarkModeContext);

  useEffect(() => {
    let filtered = countries;

    if (region !== 'All') {
      filtered = filtered.filter((country) => country.region === region);
    }

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  }, [searchTerm, region, countries]);

  const handleRegionChange = (region) => {
    setRegion(region);
  };

  return (
    <main className={darkMode ? 'content dark-mode' : 'content'}>
      <div className='search'>
        
        <input 
          className={darkMode ? 'input dark-mode' : 'input'}
          type="text" 
          placeholder={ getPlaceholderText()}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
          <DropdownMenu regions={['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']} handleRegionChange={handleRegionChange} />

      </div>
      
      <div className={darkMode ? 'content dark-mode' : 'content'}>
        {loading ? (
          <div className="loader">
            <LuLoader2 className="loading-icon" />
          </div>
        ) : (
          <div className={darkMode ? 'country-list dark-mode' : 'country-list'}>
            {filteredCountries && filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div key={country.name}>
                  <Country country={country} />
                </div>
              ))
            ) : (
              <p>No countries found for the selected region.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default CountryList;



// import React, { useContext, useEffect, useState } from 'react';
// import { LuLoader2 } from "react-icons/lu";
// import { DarkModeContext } from '../../context/DarkModeContext';
// import Country from '../country/Country';
// import './countryList.css';

// const CountryList = ({ countries, loading }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredCountries, setFilteredCountries] = useState(countries);
//   const [region, setRegion] = useState('All');

//   const { darkMode } = useContext(DarkModeContext);

  

//   useEffect(() => {
//     let filtered = countries;

//     if (region !== 'All') {
//       filtered = filtered.filter((country) => country.region === region);
//     }

//     if (searchTerm) {
//       filtered = filtered.filter((country) =>
//         country.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     setFilteredCountries(filtered);
//   }, [searchTerm, region, countries]);
//   console.log("search", searchTerm);

//  // Dynamically change the select/option color mode
//  useEffect(() => {
//   const updateSelectStyles = () => {
//     const selectElement = document.querySelector('.select');
//     if (selectElement) {
//       const options = selectElement.options;
//       for (let i = 0; i < options.length; i++) {
//         options[i].style.backgroundColor = getComputedStyle(document.documentElement)
//           .getPropertyValue(darkMode ? '--dark-blue-elements' : '--white');
//         options[i].style.color = getComputedStyle(document.documentElement)
//           .getPropertyValue(darkMode ? '--white' : '--very-dark-blue-text');
//       }
//       selectElement.style.backgroundColor = getComputedStyle(document.documentElement)
//         .getPropertyValue(darkMode ? '--dark-blue-elements' : '--white');
//       selectElement.style.color = getComputedStyle(document.documentElement)
//         .getPropertyValue(darkMode ? '--white' : '--very-dark-blue-text');
//     }
//   };

//   updateSelectStyles();

//   // Add event listener for dynamic updates
//   const selectElement = document.querySelector('.select');
//   if (selectElement) {
//     selectElement.addEventListener('change', updateSelectStyles);
//   }

//   return () => {
//     if (selectElement) {
//       selectElement.removeEventListener('change', updateSelectStyles);
//     }
//   };
// }, [darkMode]); 

//   const handleRegionChange = (e) => {
//     setRegion(e.target.value);
//   }

//   return (
//     <main className={ darkMode ? 'content dark-mode' : 'content'}>
//       <div className= 'search'>
//         <input 
//         className ={ darkMode ? 'input dark-mode' : 'input'}
//         type="text" 
//         placeholder="Search for a country..."
//          value={searchTerm} 
//          onChange={(e)=>setSearchTerm(e.target.value)} />
//         <div className={`dropdown ${darkMode ? 'dark-mode' : ''}`}>
//           <span>Filter by Region</span>
//           <div className={ darkMode ? "dropdownMenu dark-mode" : "dropdownMenu"}>
//             <ul className="submenu">
//               <li onClick={handleRegionChange}>All</li>
//               <li onClick={handleRegionChange}>Africa</li>
//               <li onClick={handleRegionChange}>Americas</li>
//               <li onClick={handleRegionChange}>Asia</li>
//               <li onClick={handleRegionChange}>Europe</li>
//               <li onClick={handleRegionChange}>Oceania</li>
//             </ul>
//           </div>
//         </div>
//       </div>
      
//       <div className={ darkMode ? 'content dark-mode' : 'content'}>
//         {loading ? (
//           <div className="loader">
//             <LuLoader2 className="loading-icon" />
//           </div>
//         ) : (
//           <div className={ darkMode ? 'country-list dark-mode' : 'country-list'}>
//             {filteredCountries && filteredCountries.map((country) => (
//               <div key={country.name}>
//                 <Country country={country} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
  
//     </main>
//   );
// };

// export default CountryList;
  