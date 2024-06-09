import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getFilteredLaunchesList } from "../../dataLayer/features/launches/launchesSelector";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import LaunchCard from "../LaunchCard";
import "./launchesList.scss";

const LaunchesList = () => {
  const launches = useSelector(getFilteredLaunchesList, shallowEqual);
  const { numberOfEntries, updateNumberOfEntries } =
    useIntersectionObserver(20);

  return (
    <div className="sxl-launches-list">
      <div className="sxl-ll-wrapper">
        {launches.slice(0, numberOfEntries).map((data, index) => {
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
