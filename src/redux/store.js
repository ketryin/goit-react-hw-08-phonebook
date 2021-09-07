import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducers from "./auth/authReducers";
import filterReducer from "./filter/filterReducers";
import itemsReducers from "./items/contactReducers";

const contactsReducer = combineReducers({
  items: itemsReducers,
  filter: filterReducer,
  auth: authReducers,
});

const store = configureStore({
  reducer: {
    contactsReducer,
  },
});

export default store;
