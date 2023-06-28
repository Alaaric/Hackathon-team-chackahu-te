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
    </nav>
  );
}
