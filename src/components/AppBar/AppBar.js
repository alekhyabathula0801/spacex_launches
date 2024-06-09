import { Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import hamburger_menu from "../../assets/hamburger_menu.svg";
import SearchBar from "../SearchBar";
import "./appBar.scss";

const AppBar = () => {
  return (
    <Box className="sxl-app-bar">
      <MuiAppBar position="fixed">
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
          <img className="sxl-tb-menu" src={hamburger_menu} alt="menu" />
        </Toolbar>
      </MuiAppBar>
      <Box className='sxl-ab-bottom-padding' />
    </Box>
  );
};

export default AppBar;
