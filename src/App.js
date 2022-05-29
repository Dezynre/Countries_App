import React from 'react'
import './App.css'
import Header from './Components/Header/Header.js'
import Hero from './Components/Hero/Hero.js'
import Countries from './Components/Countries/Countries.js'
import SingleCountry from './Components/SingleCountry/SingleCountry.js'

function App() {

  let [countries, setCountries] = React.useState([])
  let [countriesToRender, setCountriesToRender] = React.useState([])
  let [country, setCountry] = React.useState(null)


  React.useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setCountries(data)
      setCountriesToRender(data)
    })
  }, [])

  let [isSingleCountry, setIsSingleCountry] = React.useState(false)
  function toggleIsSingleCountry() {
    setIsSingleCountry((prevIsSingleCountry)=>{
      return !prevIsSingleCountry
    })
  }

  let [darkMode, setDarkMode] = React.useState(false)
  function toggleMode() {
    setDarkMode((prevDarkMode)=>{
      return !prevDarkMode
    })
  }




  //Filter Functions

  function getAfrica() {
    setCountriesToRender(countries.filter((country) => {
      return country.region === "Africa"
    }))
  }

  function getAmerica() {
    setCountriesToRender(countries.filter((country) => {
      return country.region === "Americas"
    }))
  }

  function getAsia() {
    setCountriesToRender(countries.filter((country) => {
      return country.region === "Asia"
    }))
  }

  function getEurope() {
    setCountriesToRender(countries.filter((country) => {
      return country.region === "Europe"
    }))
  }

  function getOceania() {
    setCountriesToRender(countries.filter((country) => {
      return country.region === "Oceania"
    }))
  }





  if (isSingleCountry) {
    return (
      <>
        <Header darkMode={darkMode} toggleMode={toggleMode} />
        <SingleCountry country={country} darkMode={darkMode} toggleIsSingleCountry={toggleIsSingleCountry} />
      </>
    )
  }
  else {
    return (
      <>
        <Header darkMode={darkMode} toggleMode={toggleMode} />
        <Hero setCountry={setCountry} countries={countries} toggleIsSingleCountry={toggleIsSingleCountry} getAfrica={getAfrica} getAmerica={getAmerica} getAsia={getAsia} getEurope={getEurope}  getOceania={getOceania} darkMode={darkMode} />
        {countriesToRender.length > 0 && <Countries darkMode={darkMode} countries={countriesToRender} />}
      </>
      )
  }
}

export default App
