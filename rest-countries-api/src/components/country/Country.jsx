import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import './country.css';



const Country = ({country}) => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);


  const handleClick = () => {
    navigate(`/country/${country.name}`)
  }
  return (
    <div className={darkMode ?  'country-card dark-mode' : 'country-card'} onClick={handleClick} style={{ cursor: "pointer"}}>
        <img className="country-flag" src={country.flag} alt={`${country.name} flag`} />
        <div className='country-info' >
            <h3>{country.name}</h3>
             <p><span>Population:</span> {country.population}</p>
              <p><span>Region:</span> {country.region}</p>
              <p><span>Capital:</span>{country.capital}</p>

        </div>
    </div>
  )
}



export default Country