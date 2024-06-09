import { createSelector } from "@reduxjs/toolkit";
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

export const getLaunchesSearchText = (state) => {
  return get(state, "launches.filterData.searchText", "");
};

export const getSelectedFilteredLaunchStatus = (state) => {
  return get(state, "launches.filterData.launchStatus", "");
};

export const getSelectedFilteredLaunchYear = (state) => {
  return get(state, "launches.filterData.launchYear", "");
};

export const getFilteredLaunchesList = createSelector(
  [getLaunchesData, getLaunchesSearchText],
  (launchesList = [], searchText = {}) => {
    const filteredData = launchesList.filter((data) =>
      data?.mission_name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filteredData;
  }
);
