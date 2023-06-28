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
          <p>test1</p>
        </Link>
        <Link to="/">
          <p>Test2</p>
        </Link>
        <Link to="/">
          <p>et la le 3</p>
        </Link>
        <Link to="/">
          <p>Ici c'est 4</p>
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