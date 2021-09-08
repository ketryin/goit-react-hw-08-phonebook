import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/authSelector";
import { logout } from "../../redux/auth/authOperations";

function UserMenu() {
  const isAuthorized = useSelector(authSelectors.isAuthorized);
  const authToken = useSelector(authSelectors.authToken);
  const currentUser = useSelector(authSelectors.currentUser);

  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logout(authToken));

  return (
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
      {isAuthorized && <h1>Email : {currentUser.email}</h1>}
      {isAuthorized && <button onClick={onLogOut}>Log Out</button>}
    </nav>
  );
}

export default UserMenu;
