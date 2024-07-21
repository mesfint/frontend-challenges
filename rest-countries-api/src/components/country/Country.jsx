import React from 'react';
import { useNavigate } from 'react-router-dom';
import './country.css';



const Country = ({country}) => {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`/country/${country.name}`)
  }
  return (
    <div className='country' onClick={handleClick} style={{ cursor: "pointer"}}>
        <img src={country.flag} alt={country.name} />
        <div className="country-info" >
            <h3>{country.name}</h3>
             <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital}</p>

        </div>
    </div>
  )
}



export default Country