import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function NavModal() {
  const { users } = useContext(UserContext);
  return (
    <nav>
      <div>
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
    </nav>
  );
}
