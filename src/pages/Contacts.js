import { useEffect } from "react";
import Form from "../components/Form";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter";
import {
  getContacts,
  addContact,
  removeContact,
} from "../redux/items/contactsOperations";
import { updateFilter } from "../redux/filter/filterActions";
import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "../redux/contactsSelector";
import authSelectors from "../redux/authSelector";

function Contacts() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const authToken = useSelector(authSelectors.authToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts(authToken));
  }, [authToken, dispatch]);

  const onContactAdd = (contact) => {
    if (
      contacts.find((c) => c.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert("Error! Can not add existing contact.");
      return;
    }

    dispatch(addContact({ contact, authToken }));
  };

  const onFilterUpdate = (value) => dispatch(updateFilter(value));
  const onContactDelete = (id) => dispatch(removeContact({ id, authToken }));

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={onContactAdd} />
      {filteredContacts.length > 0 && (
        <>
          <h1>Contacts</h1>
          <Filter
            filter={filter}
            handleFilter={(e) => onFilterUpdate(e.currentTarget.value)}
          />
          <ContactsList
            filter={filter}
            contacts={filteredContacts}
            onDeleteContact={onContactDelete}
          />
        </>
      )}
    </div>
  );
}

export default Contacts;
