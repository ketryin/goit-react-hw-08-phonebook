import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as authActions from "./authActions";

const currentUser = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => null,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const isAuthorized = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
});

const authError = createReducer(null, {
  [authActions.registerError]: () => "Error",
  [authActions.loginError]: () => "Error",
  [authActions.logoutError]: () => "Error",
});

const authReducers = combineReducers({
  currentUser,
  token,
  isAuthorized,
  authError,
});

export default authReducers;
