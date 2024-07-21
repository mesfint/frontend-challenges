import Country from '../country/Country';
import './countryList.css';




const CountryList = ({countries}) => {


  return (
    <main>
        
        <div className='search'>
    
            <input type="text" placeholder= "Search for a country..."/>
            <select>
                <option value="Filter by Region">Filter by Region</option>
                </select>
        </div>
        
        <div className="content">
            <div className="country-content">
        {countries && countries.map((country)=>{
            return(
                <div key={country.name} >
                    <Country country={country}/>
                    
                </div>
            )
        })}

            </div>

        </div>
        
        
        
    </main>
  )
}



export default CountryList