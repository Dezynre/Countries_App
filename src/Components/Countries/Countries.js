
import React from 'react'
import './Countries.css'

function Country(props) {
    return (
        <div
            style={{
                backgroundColor: props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)"
            }}
            className="country">
            <picture><img src={props.country.flag} /></picture>
            <p id="title">{props.country.name}</p>
            <p>Population: {props.country.population}</p>
            <p>Region: {props.country.region}</p>
            <p>Capital: {props.country.capital}</p>
        </div>
    )
}



function Countries(props) {
    return (
        <section
            className="countries"
            style={{
                backgroundColor: props.darkMode? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 92%)", 
            }}
        >
            {
                props.countries.map((country)=>{
                    return <Country key={country.alpha3Code} darkMode={props.darkMode} country={country} />
                })
            }
        </section>
    )
}


export default Countries