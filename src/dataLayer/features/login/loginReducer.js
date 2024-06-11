import { createReducer } from "@reduxjs/toolkit";
import { setUserData } from "./loginAction";

const initialState = {
  userData: {
    userId: "",
    password: "",
  },
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
});
