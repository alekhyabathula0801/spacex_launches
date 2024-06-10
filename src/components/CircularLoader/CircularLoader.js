import { Stack } from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import React from "react";
import "./circularLoader.scss";

export const LOADER_VARIANTS = {
  INDETERMINATE: "indeterminate",
  DETERMINATE: "determinate",
};

export const STROKE_CAP = {
  ROUND: "round",
  SQUARE: "square",
};

const CircularLoader = ({
  color = "foundationColors.primary.brand",
  circularTrackColor = "foundationColors.supporting.grey",
  strokeCap = STROKE_CAP.ROUND,
  variant = LOADER_VARIANTS.INDETERMINATE,
  size = 24,
  thickness = 5,
  loaderValue = 100,
  ...restProps
}) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="sxl-circular-loader"
    >
      <CircularProgress
        sx={{
          color: "transparent",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: STROKE_CAP.ROUND,
          },
        }}
        size={size}
        thickness={thickness}
        variant={LOADER_VARIANTS.DETERMINATE}
        value={100}
        {...restProps}
      />
      <CircularProgress
        sx={{
          color: color,
          position: "absolute",
          animationDuration: "1500ms",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: strokeCap,
          },
        }}
        size={size}
        thickness={thickness}
        variant={variant}
        value={loaderValue}
        {...restProps}
      />
    </Stack>
  );
};

export default CircularLoader;

CircularLoader.propTypes = {
  color: PropTypes.string,
  strokeCap: PropTypes.oneOf(Object.values(STROKE_CAP)),
  variant: PropTypes.oneOf(Object.values(LOADER_VARIANTS)),
  size: PropTypes.number,
  thickness: PropTypes.number,
  loaderValue: PropTypes.number,
  circularTrackColor: PropTypes.string,
};
