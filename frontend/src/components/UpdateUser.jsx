import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import inputValidationUpdateUser from "../services/inputValidationUpdateUser";

export default function UpdateUser({ setShowUpdateUser, currentUser }) {
  const [user, setUser] = useState([]);
  const [targetValues, setTargetValues] = useState({
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email,
    role: user.role_id,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${currentUser.id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [currentUser]);

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
        .put(`${import.meta.env.VITE_BACKEND_URL}/users/${currentUser.id}`, {
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

  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/users/${currentUser.id}`)
      .then((res) => console.info(res.data))
      .catch((err) => console.error(err));
    setShowUpdateUser(false);
  };

  const sendLink = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/test`, {
      id: user.id,
      email: targetValues.email,
    });
    setShowUpdateUser(false);
  };
  console.info(currentUser);
  return (
    <div className="modalBackground-user">
      <form className="add-user-management">
        <button
          type="button"
          className="close-btn"
          onClick={() => setShowUpdateUser(false)}
        >
          {" "}
          X{" "}
        </button>

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
            <button type="button" className="addBtn" onClick={submit}>
              Modifier l'utilisateur
            </button>
            <button
              className="remove-button-container deleteBtn"
              type="button"
              onClick={() => handleDelete()}
            >
              Supprimer l'utilisateur
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
UpdateUser.propTypes = {
  setShowUpdateUser: PropTypes.func.isRequired,
  currentUser: PropTypes.shape().isRequired,
};
