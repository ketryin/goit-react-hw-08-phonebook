const isAuthorized = (state) => state.contactsReducer.auth.isAuthorized;
const authToken = (state) => state.contactsReducer.auth.token;

const authSelectors = { isAuthorized, authToken };

export default authSelectors;
