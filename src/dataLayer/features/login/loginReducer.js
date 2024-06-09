import { createReducer } from "@reduxjs/toolkit";
import { setUserData } from "./loginAction";

const initialState = { userData: {} };

export default createReducer(initialState, (builder) => {
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
});
