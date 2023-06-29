import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";
import Logo from "../assets/logoEmmaus.png";
import UserContext from "../contexts/UserContext";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { users } = useContext(UserContext);

  const handleMenuClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header>
      <div className="logoContainer">
        <Link to="/calculator">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
      </div>

      <div className="navHeader">
        <Link
          to={users.role_id === 2 ? "/admin/products" : "/connected/products"}
        >
          <p>Stock</p>
        </Link>
        <Link
          to={
            users.role_id === 2 ? "/admin/calculator" : "/connected/calculator"
          }
        >
          <p>Estimation</p>
        </Link>
        {users.role_id === 2 && (
          <Link to="/admin/dashboard">
            <p>Admin</p>
          </Link>
        )}
        <Link to={users.role_id === 2 ? "/admin/faq" : "/connected/faq"}>
          <p>FAQ</p>
        </Link>

        <button className="btnDisconnect" type="button">
          <Link to="/">
            <p>Déconnexion</p>
          </Link>
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
