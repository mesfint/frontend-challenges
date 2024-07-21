import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import data from '../rest-countries-api-with-color-theme-switcher-master/data';
import './App.css';
import Layout from './components/layout/Layout';
import CountryDetail from './components/countryDetails/CounterDetail.jsx';
import CountryList from './components/countryList/CountryList';

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
        <Route path='/' element={<Layout />}>
          <Route index element={<CountryList countries={countries} />} />
          <Route path='country/:name' element={<CountryDetail countries={countries} />} />
        </Route>
      </Routes>
    </Router>
        
    </>
  )
}

export default App
