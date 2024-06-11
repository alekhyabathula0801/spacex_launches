import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginReducer";
import launchesReducer from "../features/launches/launchesReducer";
import usersReducer from "../features/users/usersReducer";

export default combineReducers({
  login: loginReducer,
  launches: launchesReducer,
  users: usersReducer,
});
