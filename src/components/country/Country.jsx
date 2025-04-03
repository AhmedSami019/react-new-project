import React, { useState } from 'react';
import "./country.css"

const Country = ({country, handleVisitedCountries, handleVisitedCountriesFlag}) => {
    const [Visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!Visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`card ${Visited && 'not-visited' }`}>
            <h2>Country Name : {country.name.common}</h2>
            <h5>Official Name : {country.name.official}</h5>
            <img className='flag-height' src={country.flags.png} alt="" />
            <p>Independent : {country.independent ? 'they have freedom' : 'they do not have freedom'}</p>
            <p>Language : {country.language}</p>
            {
                country.independent === true && <p>this is an independent country</p>
            }
            <button className={Visited? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>{Visited? 'visited' : 'Not Visited'}</button>
            <button onClick={()=> handleVisitedCountriesFlag(country.flags.png)}>add flag</button>
        </div>
    );
};

export default Country;