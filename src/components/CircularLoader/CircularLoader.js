import { Stack } from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import React from "react";

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
  showCircularTrack = false,
  size = 12,
  thickness = 5,
  loaderValue = 100,
  wrapperSx = {},
  ...restProps
}) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ ...styles.wrapper, ...wrapperSx }}
    >
      <CircularProgress
        sx={{
          color: showCircularTrack ? circularTrackColor : "transparent",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: strokeCap,
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

const styles = {
  wrapper: {
    position: "relative",
  },
};

export default CircularLoader;

CircularLoader.propTypes = {
  color: PropTypes.string,
  strokeCap: PropTypes.oneOf(Object.values(STROKE_CAP)),
  variant: PropTypes.oneOf(Object.values(LOADER_VARIANTS)),
  size: PropTypes.number,
  thickness: PropTypes.number,
  loaderValue: PropTypes.number,
  showCircularTrack: PropTypes.bool,
  circularTrackColor: PropTypes.string,
  wrapperSx: PropTypes.object,
};
