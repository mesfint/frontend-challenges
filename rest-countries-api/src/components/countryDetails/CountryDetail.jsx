import React from 'react';
import { useParams } from 'react-router-dom';
import './countryDetail.css';

const CountryDetail = ({ countries }) => {
  const { name } = useParams();
  const country = countries && countries.find((c) => c.name === name);

  if (!country) {
    return <p>Country not found</p>;
  }

   return (
    <div className='content-detail'>
      <button onClick={() => window.history.back()}>Back</button>
      <div className="details">
        
          <img src={country.flag} alt={country.name} style={{ width: '200px' }} />
        
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
                <a key={borderCountry.alpha3Code}>{borderCountry.name}</a>
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
