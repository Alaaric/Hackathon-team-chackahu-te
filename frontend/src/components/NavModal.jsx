import { Link } from "react-router-dom";

export default function NavModal() {
  return (
    <nav>
      <div>
        <Link to="/">
          <p>Accueil</p>
        </Link>
        <Link to="/">
          <p>test1</p>
        </Link>
        <Link to="/">
          <p>Test2</p>
        </Link>
        <Link to="*">
          <p>test de la 404</p>
        </Link>
        <Link to="/Faq">
          <p>FAQ</p>
        </Link>

        <button className="btnDisconnect" type="button">
          Déconnexion
        </button>
      </div>
    </nav>
  );
}
