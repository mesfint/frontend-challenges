import React, { useState } from 'react'
import data from '../../../rest-countries-api-with-color-theme-switcher-master/data.json'
import "./countryList.css"


const CountryList = () => {
    const [countries, setCountries] = useState([])


  return (
    <main className='container'>
        <header className="header">
            <p>Where in the world?</p>
            <button>Dark Mode</button>
        </header>
        <div className="content">
        {data && data.map((country)=>{
            return(
                <div key={country.name}>
                    <img src={country.flag} alt={country.name} />
                    <h3>{country.name}</h3>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                    
                </div>
            )
        })}

        </div>
        
        
    </main>
  )
}



export default CountryList