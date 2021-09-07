import * as actions from "./authActions";
import { signUp, logIn, logOut, currentUser } from "../../api/contactsApi";

export const register = (user) => (dispatch) => {
  dispatch(actions.registerPending());

  return signUp(user)
    .then((user) => dispatch(actions.registerSuccess(user)))
    .catch((error) => dispatch(actions.registerError(error.message)));
};

export const login = (user) => (dispatch) => {
  dispatch(actions.loginPending());

  return logIn(user)
    .then((user) => dispatch(actions.loginSuccess(user)))
    .catch((error) => dispatch(actions.loginError(error.message)));
};

export const logout = (token) => (dispatch) => {
  dispatch(actions.logoutPending());

  return logOut(token)
    .then((_) => dispatch(actions.logoutSuccess()))
    .catch((error) => dispatch(actions.logoutError(error.message)));
};

export const getCurrentUser = (token) => (dispatch) => {
  dispatch(actions.currentUserPending());

  return getCurrentUser(token)
    .then((user) => dispatch(actions.currentUserSuccess(user)))
    .catch((error) => dispatch(actions.currentUserError(error.message)));
};
