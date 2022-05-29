
import './SingleCountry.css'

function SingleCountry(props) {
    return(
        <>
            <section className="singleCountry">
                <div className="back_button_wrapper">
                    <button onClick={props.toggleIsSingleCountry}>Back</button>
                </div>
                <picture className="flag">
                    <img src={props.country[0].flag} />
                </picture>
                <h1 className="countryName">{props.country[0].name}</h1>
                <div className="countryInfoPrimary">
                    <p>Native Name: {props.country[0].nativeName}</p>
                    <p>Region: {props.country[0].region}</p>
                    <p>Sub Region: {props.country[0].subregion}</p>
                    <p>Capital: {props.country[0].capital}</p>
                </div>
                <div className="countryInfoSecondary">
                    <p>Top Level Domain: {props.country[0].topLevelDomain[0]}</p>
                    <p>Currencies: {props.country[0].currencies[0].name}</p>
                    <section>
                    Languages: 
                        {props.country[0].languages.map((language)=>{
                            return <span key={language.iso639_1}>{language.name}, </span>
                        })}
                    </section>
                </div>
                <div className="countryInfoBorder">
                    <p>Border Coutries: {props.country[0].borders.map((border)=>{
                        return <span key={border}>{border} </span>
                    })}</p>
                </div>
            </section>
        </>
    )
}
 export default SingleCountry