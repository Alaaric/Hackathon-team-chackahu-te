import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";

function UsersList({ tab }) {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, [showAddUser, showUpdateUser]);

  return (
    <div className={tab === 1 ? "display" : "hide"}>
      {showAddUser && <AddUser setShowAddUser={setShowAddUser} />}
      {showUpdateUser && <UpdateUser setShowUpdateUser={setShowUpdateUser} />}
      <button type="button" onClick={() => setShowAddUser(true)}>
        Ajouter un utilisateur
      </button>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Rôle</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.lastname}</td>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td>{user.role_id}</td>
                <td>
                  <button type="button" onClick={() => setShowUpdateUser(true)}>
                    <img src="../src/assets/view.png" alt="" />
                  </button>
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
