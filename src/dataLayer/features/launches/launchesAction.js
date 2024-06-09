import { createAction } from "@reduxjs/toolkit";

const MODULE_PREFIX = "[ LAUNCHES ]";

const ACTIONS = {
  fetchLaunches: `${MODULE_PREFIX} fetchLaunches`,
  setLaunchesData: `${MODULE_PREFIX} setLaunchesData`,
  setLaunchesErrorData: `${MODULE_PREFIX} setLaunchesErrorData`,
  setIsFetchingLaunches: `${MODULE_PREFIX} setIsFetchingLaunches`,
  updateFilterData: `${MODULE_PREFIX} updateFilterData`,
  setLaunchYearOptions: `${MODULE_PREFIX} setLaunchYearOptions`,
};

//actions
export const fetchLaunches = createAction(ACTIONS.fetchLaunches);
export const setLaunchesData = createAction(ACTIONS.setLaunchesData);
export const setLaunchesErrorData = createAction(ACTIONS.setLaunchesErrorData);
export const setIsFetchingLaunches = createAction(
  ACTIONS.setIsFetchingLaunches
);
export const setLaunchYearOptions = createAction(ACTIONS.setLaunchYearOptions);
export const updateFilterData = createAction(ACTIONS.updateFilterData);
