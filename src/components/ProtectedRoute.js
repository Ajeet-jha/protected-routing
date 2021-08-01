import React from "react";
import {
  Redirect,
  Route,
  useHistory
} from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {

  const history = useHistory();

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const redirect = history.location.pathname === '/about' ? '/register' : '/signin';

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
}

export default ProtectedRoute;
