import React, { use, useState } from 'react';
import Country from '../country/country';
import "./countries.css"

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);

    const [visitedCountries, setVisitedCountries]= useState([])
    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([])
    const handleVisitedCountriesFlag = (flag)=>{
        const newVisitedCountriesFlag = [...visitedCountriesFlag, flag]
        setVisitedCountriesFlag(newVisitedCountriesFlag)
    }
    return (
        <div>
          <h1>Traveling countries : {countries.length}</h1>
          <h3>Count of countries how much I visited : {visitedCountries.length} </h3>
            <div>
                {
                    visitedCountriesFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {visitedCountries.map(country => <li key={country.ccs3}>{country.name.common}</li>)}
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedCountriesFlag={handleVisitedCountriesFlag}
                        country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;