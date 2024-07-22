import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import './countryDetail.css';


const CountryDetail = ({ countries }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { name } = useParams();
  const country = countries && countries.find((c) => c.name === name);

  if (!country) {
    return <p>Country not found</p>;
  }
   return (

    <div className={darkMode ? 'content-detail dark-mode' : 'content-detail'}>
      <button className='back-button' onClick={() => window.history.back()}>Back</button>
      <div className="details">
        
          <img src={country.flag} alt={country.name} style={{ width: '250px', height : '250px'}} />
        
        <div className="detail">
          <div className='detail-text'>
          <div className='detail-info'>
          <h1>{country.name}</h1>
          <p>Native Name: {country.nativeName}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Sub Region: {country.subregion}</p>
          <p>Capital: {country.capital}</p>

          </div>
          <div className="detail-more">
            <p>Top Level Domain: {country.topLevelDomain}</p>
            <p>Currencies: {country.currencies?.[0]?.name || 'N/A'}</p>
            <p>Languages: {country.languages?.map((lang) => lang.name).join(', ') || 'N/A'}</p>
          </div>
          </div>
        <div className="border-countries">
          <p>Border Countries: </p>
          {country.borders?.length ? (
            country.borders.map((border) => {
              const borderCountry = countries.find((c) => c.alpha3Code === border);
              return borderCountry ? (
                <button className='borders' key={borderCountry.alpha3Code}>{borderCountry.name}</button>
              ) : null;
            })
          ) : (
            <p>No border countries</p>
          )}
        </div>

        </div>
        </div>
      </div>
    
  );
};

export default CountryDetail;
