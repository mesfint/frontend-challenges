import React, { useEffect, useState } from 'react';
import { LuLoader2 } from "react-icons/lu";
import Country from '../country/Country';
import './countryList.css';

const CountryList = ({ countries, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [region, setRegion] = useState('All');

  

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
  console.log("search", searchTerm);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  }

  return (
    <main className='container'>
      <header className="header">
        <p>Where in the world?</p>
        <p>Dark Mode</p>
      </header>
      
      <div className='search'>
        <input 
        type="text" 
        placeholder="Search for a country..."
         value={searchTerm} 
         onChange={(e)=>setSearchTerm(e.target.value)} />
        <select value={region} onChange={handleRegionChange}>
        <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        
        </select>
      </div>
      
      <div className="content">
        {loading ? (
          <div className="loader">
            <LuLoader2 className="loading-icon" />
          </div>
        ) : (
          <div className="country-content">
            {filteredCountries && filteredCountries.map((country) => (
              <div key={country.name}>
                <Country country={country} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default CountryList;
