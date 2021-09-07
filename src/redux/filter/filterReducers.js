import { createReducer } from "@reduxjs/toolkit";
import { updateFilter } from "./filterActions";

const filterReducer = createReducer("", {
  [updateFilter]: (_, action) => action.payload ?? "",
});

export default filterReducer;
