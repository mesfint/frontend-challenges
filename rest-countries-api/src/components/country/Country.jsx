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
    <div className='country' onClick={handleClick} style={{ cursor: "pointer"}}>
        <img src={country.flag} alt={country.name} />
        <div className={ darkMode ?'country-info dark-mode' : 'country-info'} >
            <h3>{country.name}</h3>
             <p><span>Population:</span> {country.population}</p>
              <p><span>Region:</span> {country.region}</p>
              <p><span>Capital:</span>{country.capital}</p>

        </div>
    </div>
  )
}



export default Country