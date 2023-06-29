import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import inputValidationRules from "../services/inputValidationRules";

export default function AddUser({ setShowAddUser }) {
  const [targetValues, setTargetValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: 1,
  });

  const update = (event) => {
    const target = event.currentTarget;

    setTargetValues({
      ...targetValues,
      [target.name]: target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();

    const isValidForm = Object.values(inputValidationRules(targetValues)).every(
      (key) => key
    );

    if (isValidForm) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          firstname: targetValues.firstName,
          lastname: targetValues.lastName,
          email: targetValues.email,
          password: targetValues.password,
          role_id: parseInt(targetValues.role, 10),
        })
        .then((response) => {
          if (response.status === 201) {
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/test`, {
              id: response.data[0].insertId,
              email: targetValues.email,
            });
          }
        })
        .catch((err) => console.error(err));
    } else {
      console.info("XXX Submitting form with state:", targetValues);
    }
    event.target.reset();
  };

  return (
    <div className="modalBackground-user">
      {" "}
      <form className="add-user-management" onSubmit={submit}>
        <div className="close-btn">
          <button type="button" onClick={() => setShowAddUser(false)}>
            {" "}
            X{" "}
          </button>
        </div>
        <div className="add-user-title-container">
          <h2 className="add-user-title">Ajout d'utilisateur</h2>
        </div>
        <div className="user-management-container">
          <div className="input-fields">
            <div className="roles-container-1">
              <label htmlFor="role_id">
                Role <br />
                <select
                  value={targetValues.role_id}
                  name="role"
                  onChange={update}
                  required
                >
                  <option value="">-- Select --</option>
                  <option value="2">Admin</option>
                  <option value="1">Bénevole</option>
                </select>
              </label>
            </div>
            <div className="input-fields name-inputs-container">
              <label htmlFor="lastName" className="lastName">
                Nom <br />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Insérez votre nom"
                  onChange={update}
                  required
                />
              </label>
              <label htmlFor="firstName" className="firstName">
                Prénom <br />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Insérez votre prénom"
                  onChange={update}
                  required
                />
              </label>
            </div>
            <div className="input-fields desktop">
              <label htmlFor="email">
                Email <br />
                <input
                  type="email"
                  name="email"
                  className="input-email"
                  placeholder="Insérez votre email"
                  onChange={update}
                  required
                />
              </label>

              <label htmlFor="password">
                Mot de passe <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Insérez votre mot de passe"
                  onChange={update}
                  required
                />
              </label>
            </div>
          </div>
          <div className="add-button-container">
            <button type="submit">Ajouter l'utilisateur</button>
          </div>
        </div>
      </form>
    </div>
  );
}
AddUser.propTypes = {
  setShowAddUser: PropTypes.func.isRequired,
};
