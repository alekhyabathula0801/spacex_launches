import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginReducer";
import launchesReducer from "../features/launches/launchesReducer";

export default combineReducers({
  login: loginReducer,
  launches: launchesReducer,
});
