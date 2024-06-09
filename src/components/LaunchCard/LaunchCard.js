import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { getLaunchCardViewData } from "./helper";
import "./launchCard.scss";

const LaunchCard = ({
  links = {},
  mission_name,
  launch_date_local,
  rocket = {},
  launch_site = {},
}) => {
  const viewData = getLaunchCardViewData({
    mission_name,
    launch_date_local,
    rocket,
    launch_site,
  });
  return (
    <Box className="sxl-launch-card">
      {links?.mission_patch && (
        <img src={links?.mission_patch} alt="logo" className="sxl-lc-logo" />
      )}
      {viewData.map((data, index) => {
        return (
          <Stack
            className="sxl-lc-display-item"
            key={index}
            flexDirection={"row"}
            gap={"16px"}
          >
            <Typography
              className="sxl-lc-di-left"
              component="div"
              variant="body2"
            >
              {data.title}
            </Typography>
            <Typography component="div" variant="body1">
              {data.value || "-"}
            </Typography>
          </Stack>
        );
      })}
    </Box>
  );
};

export default LaunchCard;
