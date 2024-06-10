import React, { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchLaunches } from "../../dataLayer/features/launches/launchesAction";
import {
  getFilteredLaunchesList,
  getIsFetchingLaunches,
  getLaunchesErrorData,
  getSelectedFilteredLaunchStatus,
  getSelectedFilteredLaunchYear,
} from "../../dataLayer/features/launches/launchesSelector";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import LaunchCard from "../LaunchCard";
import PageError from "../PageError";
import PageLoader from "../PageLoader";
import "./launchesList.scss";

const LaunchesList = () => {
  const dispatch = useDispatch();
  const launchStatus = useSelector(
    getSelectedFilteredLaunchStatus,
    shallowEqual
  );
  const launchYear = useSelector(getSelectedFilteredLaunchYear, shallowEqual);
  const isFetchingData = useSelector(getIsFetchingLaunches, shallowEqual);
  const errorData = useSelector(getLaunchesErrorData, shallowEqual);
  const filteredLaunches = useSelector(getFilteredLaunchesList, shallowEqual);

  const fetchData = useCallback(() => {
    dispatch(fetchLaunches({ params: { launchYear, launchStatus } }));
  }, [dispatch, launchYear, launchStatus]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { numberOfEntries, updateNumberOfEntries } =
    useIntersectionObserver(20);

  if (isFetchingData) {
    return <PageLoader />;
  }

  if (errorData.isFetchFailed) {
    return <PageError message={errorData.message} onRetry={fetchData} />;
  }

  return (
    <div className="sxl-launches-list">
      <div className="sxl-ll-wrapper">
        {filteredLaunches.slice(0, numberOfEntries).map((data, index) => {
          const setRef = numberOfEntries - 6 === index + 1;
          let refData = {};
          if (setRef) {
            refData.ref = updateNumberOfEntries;
          }
          return (
            <div key={index} {...refData}>
              <LaunchCard {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LaunchesList;
