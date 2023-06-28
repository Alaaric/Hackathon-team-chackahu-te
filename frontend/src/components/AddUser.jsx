// import { useEffect, useState } from "react";
// import axios from "axios";

// import inputValidationRules from "../../../services/inputValidationRules";

export default function AddUser() {
  //   const [newUploadedFileName, setNewUploadedFileName] = useState("");
  //   const [rolesData, setRolesData] = useState([]);

  //   const [targetValues, setTargetValues] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //     role: 1,
  //     roleExpert: false,
  //   });

  //   const update = (event) => {
  //     const target = event.currentTarget;

  //     setTargetValues({
  //       ...targetValues,
  //       [target.name]: target.type === "checkbox" ? target.checked : target.value,
  //       photo: newUploadedFileName,
  //     });
  //   };

  //   useEffect(() => {
  //     setTargetValues({
  //       ...targetValues,
  //       photo: newUploadedFileName,
  //     });
  //   }, [newUploadedFileName]);

  //   useEffect(() => {
  //     axios
  //       .get(`${import.meta.env.VITE_BACKEND_URL}/roles`)
  //       .then((response) => {
  //         console.info(response);
  //         setRolesData(response.data);
  //       })
  //       .catch((err) => console.error(err));
  //   }, []);

  const submit = (event) => {
    event.preventDefault();

    // const isValidForm = Object.values(inputValidationRules(targetValues)).every(
    //   (key) => key
    // );

    // if (isValidForm) {
    //   axios
    //     .post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
    //       firstname: targetValues.firstName,
    //       lastname: targetValues.lastName,
    //       photo: newUploadedFileName,
    //       email: targetValues.email,
    //       password: targetValues.password,
    //       creation_date: "2023-02-03",
    //     })
    //     .then((response) => {
    //       console.info(response);
    //       if (response.status === 201) {
    //         axios.post(
    //           `${import.meta.env.VITE_BACKEND_URL}/users/${
    //             response.data.insertId
    //           }/role`,
    //           {
    //             role_id: 3,
    //           }
    //         );
    //       }
    //     })
    //     .catch((err) => console.error(err));
    // } else {
    //   console.info("XXX Submitting form with state:", targetValues);
    // }
  };
  return (
    <form className="add-user-management" onSubmit={submit}>
      <div className="add-user-title-container">
        <h2 className="add-user-title">Ajout d'utilisateur</h2>
      </div>
      <div className="user-management-container">
        <div className="input-container">
          <div className="input-fields">
            <div className="input-fields name-inputs-container">
              <label htmlFor="lastName" className="lastName">
                Nom <br />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Insérez votre nom"
                  onChange=""
                  required
                />
              </label>
              <label htmlFor="firstName" className="firstName">
                Prénom <br />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Insérez votre prénom"
                  onChange=""
                  required
                />
              </label>
            </div>
            <label htmlFor="email">
              Email <br />
              <input
                type="email"
                name="email"
                className="input-email"
                placeholder="Insérez votre email"
                onChange=""
                required
              />
            </label>
            <label htmlFor="password">
              Mot de passe <br />
              <input
                type="password"
                name="password"
                placeholder="Insérez votre mot de passe"
                onChange=""
                required
              />
            </label>
            <div className="roles-container-1">
              <label htmlFor="role">
                Role <br />
                <select name="role" onChange="" required>
                  <option value="0">Sélectionne votre role</option>
                  <option value="1">Admin</option>
                  <option value="2">Bénevole</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="roles-container-2">
          <label htmlFor="role">
            Role <br />
            <select name="role" onChange="" required>
              <option value="0">Sélectionne votre role</option>
              {/* {rolesData
                  .filter((roleExpert) => roleExpert.role_name !== "expert")
                  .map((role) => {
                    const roleNameFirstLetterUpperCase =
                      role.role_name.charAt(0).toUpperCase() +
                      role.role_name.slice(1);
                    return (
                      <option key={role.id} value={role.id}>
                        {roleNameFirstLetterUpperCase}
                      </option>
                    );
                  })} */}
            </select>
          </label>
        </div>
        <div className="add-button-container">
          <button type="submit">Ajouter l'utilisateur</button>
        </div>
        {/* <div className="input-buttons-container"></div> */}
      </div>
    </form>
  );
}
