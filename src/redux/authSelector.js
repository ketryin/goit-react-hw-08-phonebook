const isAuthorized = (state) => state.contactsReducer.auth.isAuthorized;
const authToken = (state) => state.contactsReducer.auth.token;
const currentUser = (state) => state.contactsReducer.auth.currentUser;
const authError = (state) => state.contactsReducer.auth.authError;

const authSelectors = { isAuthorized, authToken, currentUser, authError };

export default authSelectors;
