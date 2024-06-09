import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getLaunchesData } from "../../dataLayer/features/launches/launchesSelector";
import LaunchCard from "../LaunchCard";
import "./launchesList.scss";

const LaunchesList = () => {
  const launches = useSelector(getLaunchesData, shallowEqual);
  return (
    <div className="sxl-launches-list">
      <div className="sxl-ll-wrapper">
        {launches.map((data, index) => {
          return <LaunchCard key={index} {...data} />;
        })}
      </div>
    </div>
  );
};

export default LaunchesList;
