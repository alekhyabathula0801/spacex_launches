import { Button, Stack, Typography } from "@mui/material";
import { bool, func, string } from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./pageNotFound.scss";

const PageNotFound = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="sxl-page-error"
      gap="16px"
    >
      <Typography variant="heading3">Oops 404!</Typography>
      <Button
        className="sxl-pe-retry"
        onClick={onClick}
        color="secondary"
        variant="outlined"
      >
        HOME
      </Button>
    </Stack>
  );
};

export default PageNotFound;

PageNotFound.propTypes = {
  message: string,
  onRetry: func,
  hideButton: bool,
};
