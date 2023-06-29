import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function AdminProtectedRoute({ children }) {
  const { users } = useContext(UserContext);

  if (!users || users.role_id !== 2) {
    return <Navigate to="/" replace />;
  }

  return children;
}

AdminProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AdminProtectedRoute;
