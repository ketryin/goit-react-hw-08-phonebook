import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/authSelector";
import { logout } from "../../redux/auth/authOperations";
import "./UserMenu.css";

function UserMenu() {
  const isAuthorized = useSelector(authSelectors.isAuthorized);
  const authToken = useSelector(authSelectors.authToken);
  const currentUser = useSelector(authSelectors.currentUser);

  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logout(authToken));

  return (
    <nav className="nav">
      <div className="conteinerNav">
        {!isAuthorized && (
          <NavLink to="/login">
            <div className="navElement">Login</div>
          </NavLink>
        )}
        {!isAuthorized && (
          <NavLink to="/register">
            <div className="navElement">Register</div>
          </NavLink>
        )}
        {isAuthorized && (
          <NavLink to="/contacts">
            <div className="navElement">Contacts</div>
          </NavLink>
        )}
        {isAuthorized && (
          <button onClick={onLogOut} className="navElement btnLogOut">
            Log Out
          </button>
        )}
      </div>

      {isAuthorized && (
        <h1 className="userName">Email : {currentUser.email}</h1>
      )}
    </nav>
  );
}

export default UserMenu;
