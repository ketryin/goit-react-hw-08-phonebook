import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import authSelectors from "../redux/authSelector";
import { getCurrentUser } from "../redux/auth/authOperations";

export function PrivateRoute({ children, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.isAuthorized);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(getCurrentUser(token));
    }
  }, [dispatch]);

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
}

export function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.isAuthorized);
  const shouldRedirect = restricted && isAuthenticated;

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(getCurrentUser(token));
    }
  }, [dispatch]);

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
