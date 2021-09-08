import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as authActions from "./authActions";

const currentUser = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => null,
  [authActions.currentUserSuccess]: (_, { payload }) => payload,
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
  [authActions.currentUserSuccess]: () => true,
});

const isRefreshing = createReducer(false, {
  [authActions.currentUserPending]: () => true,
  [authActions.currentUserSuccess]: () => false,
  [authActions.currentUserError]: () => false,
});

const authError = createReducer(null, {
  [authActions.registerError]: () => "Error",
  [authActions.loginError]: () => "Error",
  [authActions.logoutError]: () => "Error",
  [authActions.currentUserError]: () => "Error",
});

const authReducers = combineReducers({
  currentUser,
  token,
  isAuthorized,
  isRefreshing,
  authError,
});

export default authReducers;