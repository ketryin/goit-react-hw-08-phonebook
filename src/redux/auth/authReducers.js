import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as authActions from "./authActions";

const currentUser = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.currentUserSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => null,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.currentUserSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const isAuthorized = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.currentUserSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
});

const authError = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.currentUserError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
});

const authReducers = combineReducers({
  currentUser,
  token,
  isAuthorized,
  authError,
});

export default authReducers;
