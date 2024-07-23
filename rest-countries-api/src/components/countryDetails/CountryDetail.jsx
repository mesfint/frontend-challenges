import React, { useContext } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
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
    <>
      <button className={darkMode ? 'back-button dark-mode': 'back-button'} onClick={() => window.history.back()}><FaArrowAltCircleLeft />
       Back</button>
    
        <div className={darkMode ? 'country-detail dark-mode' : 'country-detail'}>
      <img className="country-flag-detail" src={country.flag} alt={`${country.name} flag`} />
      
      <div className="country-info-detail">
        <h1>{country.name}</h1>
        <div className="country-info-columns">
          <div className="country-info-column">
            <p><strong>Native Name:</strong> {country.nativeName}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Sub Region:</strong> {country.subregion}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
          </div>
          <div className="country-info-column">
            <p><strong>Top Level Domain:</strong> {country.topLevelDomain.join(', ')}</p>
            <p><strong>Currencies:</strong> {country.currencies.map(c => c.name).join(', ')}</p>
            <p><strong>Languages:</strong> {country.languages.map(l => l.name).join(', ')}</p>
          </div>
        </div>
        <div className="border-countries">
          <strong>Border Countries:</strong>
          {country.borders.length > 0 ? (
            <ul>
              {country.borders.map(border => (
                <li key={border}>{border}</li>
              ))}
            </ul>
          ) : (
            <p>None</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
  

};



// const CountryDetail = ({ countries }) => {

//    return (

//     <div className={darkMode ? 'content-detail dark-mode' : 'content-detail'}>
//       <div className="details">
        
//           <img src={country.flag} alt={country.name} style={{ width: '250px', height : '250px'}} />
        
//         <div className="detail">
//           <div className='detail-text'>
//           <div className='detail-info'>
//           <h1>{country.name}</h1>
//           <p>Native Name: {country.nativeName}</p>
//           <p>Population: {country.population}</p>
//           <p>Region: {country.region}</p>
//           <p>Sub Region: {country.subregion}</p>
//           <p>Capital: {country.capital}</p>

//           </div>
//           <div className="detail-more">
//             <p>Top Level Domain: {country.topLevelDomain}</p>
//             <p>Currencies: {country.currencies?.[0]?.name || 'N/A'}</p>
//             <p>Languages: {country.languages?.map((lang) => lang.name).join(', ') || 'N/A'}</p>
//           </div>
//           </div>
//         <div className="border-countries">
//           <p>Border Countries: </p>
//           {country.borders?.length ? (
//             country.borders.map((border) => {
//               const borderCountry = countries.find((c) => c.alpha3Code === border);
//               return borderCountry ? (
//                 <button className='borders' key={borderCountry.alpha3Code}>{borderCountry.name}</button>
//               ) : null;
//             })
//           ) : (
//             <p>No border countries</p>
//           )}
//         </div>

//         </div>
//         </div>
//       </div>
    
//   );
// };

export default CountryDetail;
