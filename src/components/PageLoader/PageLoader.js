import { Stack, Typography } from "@mui/material";
import React from "react";
import CircularLoader from "../CircularLoader";
import "./pageLoader.scss";

const PageLoader = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="sxl-page-loader"
    >
      <CircularLoader />
      <Typography
        className="sxl-pl-text"
        variant="body2"
        color="foundationColors.content.secondary"
      >
        Please wait...
      </Typography>
    </Stack>
  );
};

export default PageLoader;
