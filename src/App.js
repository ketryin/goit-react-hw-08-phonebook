import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PublicRoute, PrivateRoute } from "./components/Routes";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contacts from "./pages/Contacts";
import authSelectors from "./redux/authSelector";
import { logout } from "./redux/auth/authOperations";

function App() {
  const isAuthorized = useSelector(authSelectors.isAuthorized);
  const authToken = useSelector(authSelectors.authToken);

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logout(authToken));
  };

  return (
    <div className="App">
      <nav>
        {!isAuthorized && (
          <NavLink to="/login">
            <div>Login</div>
          </NavLink>
        )}
        {!isAuthorized && (
          <NavLink to="/register">
            <div>Register</div>
          </NavLink>
        )}
        {isAuthorized && (
          <NavLink to="/contacts">
            <div>Contacts</div>
          </NavLink>
        )}
        {isAuthorized && <button onClick={onLogOut}>Log Out</button>}
      </nav>

      <PublicRoute path="/" exact>
        <HomePage />
      </PublicRoute>
      <PublicRoute path="/register" exact restricted>
        <Register />
      </PublicRoute>
      <PublicRoute path="/login" exact restricted>
        <Login />
      </PublicRoute>
      <PrivateRoute path="/contacts" exact>
        <Contacts />
      </PrivateRoute>
    </div>
  );
}

export default App;
