//Importation du logo orange
import logoOrange from "../images/LogoKasa.png";

//importation pour le routing
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logoOrange} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
