import React from 'react';
import { useParams } from 'react-router-dom';


const CounterDetail = ({countries}) => {
    const { name} = useParams();
    const country = countries && countries.find((c) => c.name === name);

    if (!country) {
        return <p>Country not found</p>;
    }


  return (
    <div>
        <button onClick={() => window.history.back()}>Back</button>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <img src={country.flag} alt={country.name} style={{ width: '200px' }} />
    </div>
  )
}

export default CounterDetail