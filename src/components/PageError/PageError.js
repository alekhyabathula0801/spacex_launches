import { Stack, Typography } from "@mui/material";
import { noop } from "lodash-es";
import { func, string } from "prop-types";
import React from "react";
import "./pageError.scss";

const PageError = ({ message = "Please try again...", onRetry = noop }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="sxl-page-error"
      gap="16px"
    >
      <Typography variant="body1">Something went wrong</Typography>
      <Typography variant="body2" color={"foundationColors.content.secondary"}>
        {message}
      </Typography>
      <Typography className="sxl-pe-retry" sx={sx} onClick={onRetry}>
        Retry
      </Typography>
    </Stack>
  );
};

export default PageError;

const sx = {
  color: "foundationColors.action.brand",
  border: "1px solid",
  borderColor: "foundationColors.action.brand",
};

PageError.propTypes = {
  message: string,
  onRetry: func,
};
