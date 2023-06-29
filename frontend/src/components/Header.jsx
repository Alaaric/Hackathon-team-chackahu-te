import { useState } from "react";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";

import Logo from "../assets/logoEmmaus.png";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header>
      <div className="logoContainer">
        <Link to="/">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
      </div>

      <div className="navHeader">
        <Link to="/">
          <p>Accueil</p>
        </Link>
        <Link to="/">
          <p>Estimation</p>
        </Link>
        <Link to="/admin">
          <p>Admin</p>
        </Link>
        <Link to="*">
          <p>Test 404</p>
        </Link>
        <Link to="/Faq">
          <p>FAQ</p>
        </Link>

        <button className="btnDisconnect" type="button">
          Déconnexion
        </button>
      </div>

      <button type="button" className="burgerMenu" onClick={handleMenuClick}>
        <i className="bar firstBar" />
        <i className="bar middleBar" />
        <i className="bar lastBar" />
      </button>
      {isNavbarOpen && (
        <NavModal className={isNavbarOpen ? "modal-enter" : "modal-exit"} />
      )}
    </header>
  );
}
