import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserContext from "../contexts/UserContext";

function ProtectedRoute({ children }) {
  const { users } = useContext(UserContext);

  if (!users) {
    return <Navigate to="/" replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProtectedRoute;
