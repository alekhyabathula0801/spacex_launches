import React from "react";
import PageError from "../../PageError";
import "./fallbackErrorBoundary.scss";

const FallbackErrorBoundary = () => {
  return (
    <div className="sxl-fallback-error-boundary-wrapper">
      <PageError hideButton />
    </div>
  );
};

export default FallbackErrorBoundary;
