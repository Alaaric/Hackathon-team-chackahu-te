import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";

import LogoEmmaus from "../assets/logoEmmaus.png";

export default function Login() {
  const { setUsers } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const getUser = (e) => {
    e.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email,
          password,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        if (res.data.message) {
          setMessage(res.data.message);
        } else {
          setUsers(res.data.user);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="bgLoginContainer">
        <div className="bgOneLogin"> </div>
        <div className="bgTwoLogin"> </div>
        <div className="bgThreeLogin"> </div>
      </div>
      <div className="loginContainer">
        <img className="logoEmmausLogin" src={LogoEmmaus} alt="logoEmmaus" />
        <div className="login">
          <form onSubmit={getUser}>
            <label htmlFor="emailInput">
              Email:
              <input
                type="email"
                id="emailInput"
                placeholder="email@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="passwordInput">
              Mot de passe:
              <input
                type="password"
                id="passwordInput"
                placeholder="************"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="btnConnectLogin" type="submit">
              Se connecter
            </button>
          </form>
          {message && <div>{message}</div>}
        </div>
      </div>
    </>
  );
}
