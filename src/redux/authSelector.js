const isAuthorized = (state) => state.contactsReducer.auth.isAuthorized;
const authToken = (state) => state.contactsReducer.auth.token;
const currentUser = (state) => state.contactsReducer.auth.currentUser;

const authSelectors = { isAuthorized, authToken, currentUser };

export default authSelectors;
