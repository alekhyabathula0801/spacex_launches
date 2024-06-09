import { get } from "lodash-es";

export const getIsFetchingLaunches = (state) => {
  return get(state, "launches.isFetchingData", {});
};

export const getLaunchesData = (state) => {
  return get(state, "launches.launches", false);
};

export const getLaunchesErrorData = (state) => {
  return get(state, "launches.errorData", 0);
};

export const getFilterYearOptions = (state) => {
  return get(state, "launches.yearOptions", []);
};

export const getLaunchesFilterData = (state) => {
  return get(state, "launches.filterData", {});
};
