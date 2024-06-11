import { createReducer } from "@reduxjs/toolkit";
import { updateUsersList } from "./usersAction";

const initialState = {
  usersList: [],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(updateUsersList, (state, action) => {
    state.usersList = [...state.usersList, action.payload];
  });
});
