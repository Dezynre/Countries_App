
import './Hero.css'
import React from 'react'

function SearchForm(props) {
    let [value, setValue] =  React.useState("")

    let handleInput = (event) => {
        setValue(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if (value == "") {
            return
        }

        let country = props.countries.filter((country)=>{
            return country.name.toLowerCase() === value.toLowerCase()
        })

        props.setCountry(country)  
        props.toggleIsSingleCountry()

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" value={value} placeholder="Search for a country..." style={
                {
                    backgroundColor: props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)"
                }
            } />
            <button style={
                {
                    backgroundColor: props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
                    color: props.darkMode ? "hsl(0, 0%, 50%)" : "hsl(0, 0%, 50%)"
                }
            }><i className="fa fa-search"></i></button>
        </form>
    )
}









function FilterDropdown(props) {
    let [isDropdownVisible, setIsDropdownVisible] = React.useState(false)
    let toggleDropdownVisibility = (event) => {
        event.stopPropagation()
        setIsDropdownVisible((prevIsDropdownVisible) => {
            return !prevIsDropdownVisible
        })
    }

    React.useEffect(()=>{

        let listener = (event) => {
            if(isDropdownVisible === true) {
                setIsDropdownVisible(false)
            }
        }
        console.log("Effect")
        document.addEventListener("click", listener)

        return () => {
            document.removeEventListener("click", listener)
        }
    })
    


    return (
        <section className="filter_by_region">
            <button
            onClick={toggleDropdownVisibility}
            style={{
                backgroundColor: props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
                color: props.darkMode ? "hsl(0, 0%, 50%)" : "hsl(0, 0%, 50%)"
            }}
            >Filter by Region</button>
            <div style={
                {
                    backgroundColor: props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
                    color: props.darkMode ? "hsl(0, 0%, 50%)" : "hsl(0, 0%, 50%)",
                    display: isDropdownVisible ? "flex" : "none"
                }
            }>
                <span onClick={props.getAfrica}>Africa</span>
                <span onClick={props.getAmerica}>America</span>
                <span onClick={props.getAsia}>Asia</span>
                <span onClick={props.getEurope}>Europe</span>
                <span onClick={props.getOceania}>Oceania</span>
            </div>
        </section>
    )
}













function Hero(props) {
    return (
        <section className="hero" style={{backgroundColor: props.darkMode? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 92%)"}}>
            <SearchForm setCountry={props.setCountry} countries={props.countries} toggleIsSingleCountry={props.toggleIsSingleCountry} darkMode={props.darkMode} />
            <FilterDropdown getAfrica={props.getAfrica} getAmerica={props.getAmerica} getAsia={props.getAsia} getEurope={props.getEurope}  getOceania={props.getOceania} darkMode={props.darkMode} />
        </section>
    )
}


export default Hero