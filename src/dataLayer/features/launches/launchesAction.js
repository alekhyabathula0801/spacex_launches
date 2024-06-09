import { createAction } from "@reduxjs/toolkit";

const MODULE_PREFIX = "[ LAUNCHES ]";

const ACTIONS = {
  fetchLaunches: `${MODULE_PREFIX} fetchLaunches`,
  setLaunchesErrorData: `${MODULE_PREFIX} setLaunchesErrorData`,
  setLaunchesData: `${MODULE_PREFIX} setLaunchesData`,
  setIsFetchingLaunches: `${MODULE_PREFIX} setIsFetchingLaunches`,
};

//actions
export const fetchLaunches = createAction(ACTIONS.fetchLaunches);
export const setLaunchesErrorData = createAction(ACTIONS.setLaunchesErrorData);
export const setLaunchesData = createAction(ACTIONS.setLaunchesData);
export const setIsFetchingLaunches = createAction(
  ACTIONS.setIsFetchingLaunches
);
