import axios from "axios";
import { useState } from "react";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState();
  const [verifPassword, setVerifPassword] = useState();
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");
  const token = params.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === verifPassword) {
      console.info("ok");
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/resetpassword`, {
          password: newPassword,
          id: userId,
          tok: token,
        })
        .then((response) => console.info(response))
        .catch((err) => console.error(err));
    } else {
      console.info("Is not the same password");
    }
    e.target.reset();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="reset-password-container">
        <label htmlFor="newpassword">
          Nouveau mot de passe <br />
          <input
            type="password"
            id="newpassword"
            name="newpassword"
            placeholder="Insérez votre mot de passe"
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="reset-password-container">
        <label htmlFor="verifypassword">
          Ressaisir le mot de passe <br />
          <input
            type="password"
            id="verifypassword"
            name="verifypassword"
            placeholder=" votre mot de passe"
            onChange={(e) => setVerifPassword(e.target.value)}
            required
          />
        </label>

        <div className="reset-button-container">
          <button type="submit">Valider</button>
        </div>
      </div>
    </form>
  );
}
