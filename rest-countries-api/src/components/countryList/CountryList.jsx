import React, { useState } from 'react'
import data from '../../../rest-countries-api-with-color-theme-switcher-master/data.json'
import "./countryList.css"


const CountryList = () => {
    const [countries, setCountries] = useState([])


  return (
    <main className='container'>
        <header className="header">
            <p>Where in the world?</p>
            <p>Dark Mode</p>
        </header>
        <div className='search'>
            <input type="text" placeholder="Search for a country..."/>
            <select>
                <option value="Filter by Region">Filter by Region</option>
                </select>
                </div>
        
        <div className="content">
        {data && data.map((country)=>{
            return(
                <div key={country.name} className='country'>
                    <img src={country.flag} alt={country.name} />
                    <h3>{country.name}</h3>
                    <p><strong>Population:</strong> {country.population}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                    
                </div>
            )
        })}

        </div>
        
        
        
    </main>
  )
}



export default CountryList