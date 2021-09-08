import * as actions from "./contactsActions";
import {
  fetchContacts,
  createContact,
  deleteContact,
} from "../../api/contactsApi";

export const getContacts = (token) => (dispatch) => {
  dispatch(actions.getContactsPending());

  return fetchContacts(token)
    .then((contacts) => dispatch(actions.getContactsSuccess(contacts)))
    .catch((error) => dispatch(actions.getContactsError(error.message)));
};

export const addContact =
  ({ contact, token }) =>
  (dispatch) => {
    dispatch(actions.addContactPending());

    return createContact(contact, token)
      .then((contact) => dispatch(actions.addContactSuccess(contact)))
      .catch((error) => dispatch(actions.addContactError(error.message)));
  };

export const removeContact =
  ({ id, token }) =>
  (dispatch) => {
    dispatch(actions.deleteContactPending());

    return deleteContact(id, token)
      .then((_) => dispatch(actions.deleteContactSuccess(id)))
      .catch((error) => dispatch(actions.deleteContactError(error.message)));
  };
