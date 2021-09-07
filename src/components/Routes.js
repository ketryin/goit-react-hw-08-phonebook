import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import authSelectors from "../redux/authSelectors";

export function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getAuthStatus);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}

export function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getAuthStatus);
  const shouldRedirect = restricted && isLoggedIn;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
