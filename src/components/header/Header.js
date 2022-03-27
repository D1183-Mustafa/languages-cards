import ReactLogo from "../../assets/react.svg";
import "./Header.css"
const Header = () => {
    return(
        <div className="logo-container">
            <img className="react-logo" src={ReactLogo} alt="" />
        </div>
    )
}

export default Header;