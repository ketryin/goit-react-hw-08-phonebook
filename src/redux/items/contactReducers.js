import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as contactsActions from "./contactsActions";

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

const itemsReducers = combineReducers({
  contactItems,
  isPending,
  contactsError,
});

export default itemsReducers;
