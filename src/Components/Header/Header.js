
import moon from '../../Images/moon.svg'
import './Header.css'

function Header(props) {
    return (
        <header style={{backgroundColor: props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)"}}>
            <h1 style={{color: props.darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}}>Where in the world?</h1>
            <section onClick={props.toggleMode}>
                <picture className="mode_image" style={{border: props.darkMode ? "1px solid hsl(0, 0%, 98%)":"1px solid hsl(209, 23%, 22%)"}}>
                    {props.darkMode ? <img src={moon} /> : <img src={moon} />}
                </picture>
                <p style={{color: props.darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}}>{props.darkMode ? "Light Mode" : "Dark Mode"}</p>
            </section>
        </header>
    )
}

export default Header