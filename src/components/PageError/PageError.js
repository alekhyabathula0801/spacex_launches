import { Button, Stack, Typography } from "@mui/material";
import { noop } from "lodash-es";
import { bool, func, string } from "prop-types";
import React from "react";
import "./pageError.scss";

const PageError = ({
  message = "Please try again...",
  onRetry = noop,
  hideButton = false,
}) => {
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
      {!hideButton && (
        <Button
          onClick={onRetry}
          color="secondary"
          variant="outlined"
          className="sxl-pe-retry"
        >
          Retry
        </Button>
      )}
    </Stack>
  );
};

export default PageError;

PageError.propTypes = {
  message: string,
  onRetry: func,
  hideButton: bool,
};
