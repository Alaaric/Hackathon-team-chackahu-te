import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function UsersList({ tab }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={tab === 1 ? "display" : "hide"}>
      <button type="button">Ajouter un utilisateur</button>
      <table>
        <tr>
          <th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Rôle</th>
          </th>
        </tr>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.lastname}</td>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td>{user.role_id}</td>
                <td>
                  <img
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/view.png`}
                    alt=""
                  />
                </td>
                <td>
                  <img src="../src/assets/view.png" alt="view" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

UsersList.propTypes = {
  tab: PropTypes.number.isRequired,
};

export default UsersList;
