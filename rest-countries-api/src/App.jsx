import React, { useState,useEffect } from 'react';
import data from '../rest-countries-api-with-color-theme-switcher-master/data';
import CountryDetail from './components/countryDetails/CounterDetail.jsx'
import CountryList from './components/countryList/CountryList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    setCountries(data)
    console.log(countries)
  }, [])

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<CountryList countries={countries} />} />
          <Route path='/country/:name' element={<CountryDetail countries={countries} />} />
        </Routes>
      </Router>
        
    </>
  )
}

export default App
