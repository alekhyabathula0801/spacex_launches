import { Stack, Typography } from "@mui/material";
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
      <Typography className="sxl-pe-retry" sx={sx} onClick={onClick}>
        HOME
      </Typography>
    </Stack>
  );
};

export default PageNotFound;

const sx = {
  color: "foundationColors.action.brand",
  border: "1px solid",
  borderColor: "foundationColors.action.brand",
};

PageNotFound.propTypes = {
  message: string,
  onRetry: func,
  hideButton: bool,
};
