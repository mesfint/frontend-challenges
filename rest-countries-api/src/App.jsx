import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import data from '../rest-countries-api-with-color-theme-switcher-master/data';
import './App.css';
import CountryDetail from './components/countryDetails/CountryDetail';
import CountryList from './components/countryList/CountryList';
import Layout from './components/layout/Layout';


function App() {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // if loading is true, show the loader else show the countries
    setIsLoading(true);
    setTimeout(() => {
      setCountries(data);
      setIsLoading(false);
    }, 2000); // Simulate a delay for loading
    console.log(countries);
  }, []);

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CountryList countries={countries} loading={isLoading} />} />
          <Route path='country/:name' element={<CountryDetail countries={countries} />} />
        </Route>
      </Routes>
    </Router>
        
    </>
  )
}

export default App
