//Importation du logo orange
import logoOrange from "../images/LogoKasa.png";

//importation pour le routing
import { Link, useLocation } from "react-router-dom";

function Header() {

  const location = useLocation();

  return (
    <header>
      <img src={logoOrange} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""} >Acceuil</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""} >À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
