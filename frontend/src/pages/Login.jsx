import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function Login() {
  const { users, setUsers } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const getUser = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.message) {
          setMessage(res.data.message);
        } else {
          setUsers(res.data.user);
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="login">
      <form onSubmit={getUser}>
        <label htmlFor="emailInput">
          Email:
          <input
            type="email"
            id="emailInput"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="passwordInput">
          Mot de passe:
          <input
            type="password"
            id="passwordInput"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Se connecter</button>
      </form>
      {message && <div>{message}</div>}
      <div>{users.firstname}</div>
      <Link to="*">sdfthgstdr</Link>
    </div>
  );
}
