import Country from '../country/Country';
import "./countryList.css";



const CountryList = ({countries}) => {


  return (
    <main className='container'>
        <header className="header">
            <p>Where in the world?</p>
            <p>Dark Mode</p>
        </header>
        <div className='search'>
    
            <input type="text" placeholder= "Search for a country..."/>
            <select>
                <option value="Filter by Region">Filter by Region</option>
                </select>
                </div>
        
        <div className="content">
        {countries && countries.map((country)=>{
            return(
                <div key={country.name} >
                    <Country country={country}/>
                    
                </div>
            )
        })}

        </div>
        
        
        
    </main>
  )
}



export default CountryList