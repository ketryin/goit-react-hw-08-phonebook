import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import authSelectors from "../redux/authSelector";

export function PrivateRoute({ children, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
}

export function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  const shouldRedirect = restricted && isAuthenticated;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
