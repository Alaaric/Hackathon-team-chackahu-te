import { Link } from "react-router-dom";

export default function NavModal() {
  return (
    <nav>
      <div>
        <Link to="/calculator">
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
          <Link to="/">
            <p>Déconnexion</p>
          </Link>
        </button>
      </div>
    </nav>
  );
}
