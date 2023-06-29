import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import inputValidationUpdateUser from "../services/inputValidationUpdateUser";

export default function UpdateUser() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [targetValues, setTargetValues] = useState({
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email,
    role: user.role_id,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  const update = (event) => {
    const target = event.currentTarget;

    setTargetValues({
      ...targetValues,
      [target.name]: target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();

    const isValidForm = Object.values(
      inputValidationUpdateUser(targetValues)
    ).every((key) => key);

    if (isValidForm) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
          firstname: targetValues.firstName,
          lastname: targetValues.lastName,
          email: targetValues.email,
          role_id: parseInt(targetValues.role, 10),
          id: user.id,
        })

        .then((response) => {
          console.info(response);
        })
        .catch((err) => console.error(err));
    } else {
      console.info("XXX Submitting form with state:", targetValues);
    }
  };

  const sendLink = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/test`, {
      id: user.id,
      email: targetValues.email,
    });
  };
  console.info(user);
  return (
    <form className="add-user-management">
      <div className="add-user-title-container">
        <h2 className="add-user-title">Modification d'utilisateur</h2>
      </div>
      <div className="user-management-container">
        <div className="input-fields">
          <div className="roles-container-1">
            <label htmlFor="role_id">
              Role <br />
              <select name="role" onChange={update} required>
                <option value="">-- Select --</option>
                <option value="1">Admin</option>
                <option value="2">Bénevole</option>
              </select>
            </label>
            <p className="actual-role">Role actuel : {user.role_id}</p>
          </div>
          <div className="input-fields name-inputs-container">
            <label htmlFor="lastName" className="lastName">
              Nom <br />
              <input
                type="text"
                name="lastName"
                placeholder={user.lastname}
                onChange={update}
                required
              />
            </label>
            <label htmlFor="firstName" className="firstName">
              Prénom <br />
              <input
                type="text"
                name="firstName"
                value={user.firstname}
                placeholder={user.firstname}
                onChange={update}
                required
              />
            </label>
          </div>
          <div className="input-fields desktop update">
            <label htmlFor="email">
              Email <br />
              <input
                type="email"
                name="email"
                className="input-email"
                placeholder={user.email}
                onChange={update}
                required
              />
            </label>
            <div className="reset-link-container">
              <button className="reset-link" type="button" onClick={sendLink}>
                Réinitialiser le mot de passe
              </button>
            </div>
          </div>
        </div>
        <div className="add-button-container">
          <button
            className="remove-button-container"
            type="button"
            onClick={submit}
          >
            Modifier l'utilisateur
          </button>
          <button type="submit">Supprimer l'utilisateur</button>
        </div>
      </div>
    </form>
  );
}
