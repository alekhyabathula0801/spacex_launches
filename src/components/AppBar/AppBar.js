import { Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import hamburger_menu from "../../assets/hamburger_menu.svg";
import { getIsFetchingLaunches, getLaunchesErrorData } from "../../dataLayer/features/launches/launchesSelector";
import Drawer from "../Drawer";
import SearchBar from "../SearchBar";
import "./appBar.scss";

const AppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isFetchingData = useSelector(getIsFetchingLaunches, shallowEqual);
  const {  isFetchFailed } = useSelector(getLaunchesErrorData, shallowEqual);

  const onMenuClick = () => {
    if (isFetchingData || isFetchFailed) {
      return;
    }
    setIsDrawerOpen(true);
  };

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box className="sxl-app-bar">
      <MuiAppBar classes={{ paper: "sxl-ab-wrapper" }} position="fixed">
        <Toolbar className="sxl-ab-tool-bar">
          <Typography
            variant="heading3"
            color="foundationColors.supporting.white"
            className="sxl-tb-title"
            component="div"
          >
            SpaceX
          </Typography>
          <SearchBar />
          <img
            onClick={onMenuClick}
            className="sxl-tb-menu"
            src={hamburger_menu}
            alt="menu"
          />
        </Toolbar>
      </MuiAppBar>
      <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <Box className="sxl-ab-bottom-padding" />
    </Box>
  );
};

export default AppBar;
