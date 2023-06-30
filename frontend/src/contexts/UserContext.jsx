import { createContext, useState, useMemo } from "react";
import { PropTypes } from "prop-types";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState({});
  const [token, setToken] = useState("");
  const value = useMemo(() => ({ users, setUsers, token, setToken }), [users]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
UserProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default UserContext;
