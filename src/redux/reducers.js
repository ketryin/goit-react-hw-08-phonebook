import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as contactsActions from "./items/contactsActions";
import * as authActions from "./auth/authActions";
import { updateFilter } from "./filter/filterActions";

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

const contactItems = createReducer([], {
  [contactsActions.getContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const isPending = createReducer(false, {
  [contactsActions.getContactsPending]: () => true,
  [contactsActions.addContactPending]: () => true,
  [contactsActions.deleteContactPending]: () => true,
  [contactsActions.getContactsSuccess]: () => false,
  [contactsActions.getContactsError]: () => false,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const contactsError = createReducer(null, {
  [contactsActions.getContactsError]: (_, { payload }) => payload,
  [contactsActions.addContactError]: (_, { payload }) => payload,
  [contactsActions.deleteContactError]: (_, { payload }) => payload,
  [contactsActions.addContactPending]: () => null,
  [contactsActions.getContactsPending]: () => null,
  [contactsActions.deleteContactPending]: () => null,
});

const filter = createReducer("", {
  [updateFilter]: (_, action) => action.payload ?? "",
});

const items = combineReducers({ contactItems, isPending, contactsError });

const auth = combineReducers({
  currentUser,
  token,
  isAuthorized,
  isRefreshing,
  authError,
});

export const contactsReducer = combineReducers({
  items: items,
  filter: filter,
  auth: auth,
});
