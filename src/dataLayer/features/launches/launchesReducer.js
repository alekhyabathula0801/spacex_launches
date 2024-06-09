import { createReducer } from "@reduxjs/toolkit";
import {
  updateFilterData,
  setIsFetchingLaunches,
  setLaunchesData,
  setLaunchesErrorData,
  setLaunchYearOptions,
} from "./launchesAction";

const initialState = {
  isFetchingData: false,
  launches: [],
  errorData: {},
  filterData: {
    launchYear: "",
    launchStatus: "",
  },
  yearOptions: [],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setLaunchesData, (state, action) => {
    state.launches = action.payload;
  });
  builder.addCase(setLaunchesErrorData, (state, action) => {
    state.errorData = action.payload;
  });
  builder.addCase(setIsFetchingLaunches, (state, action) => {
    state.isFetchingData = action.payload;
  });
  builder.addCase(updateFilterData, (state, action) => {
    state.filterData = {
      ...state.filterData,
      ...action.payload,
    };
  });
  builder.addCase(setLaunchYearOptions, (state, action) => {
    state.yearOptions = action.payload;
  });
});
