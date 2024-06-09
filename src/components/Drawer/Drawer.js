import { Drawer as MuiDrawer, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { noop } from "lodash-es";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import cancel from "../../assets/cancel.svg";
import { updateFilterData } from "../../dataLayer/features/launches/launchesAction";
import {
  getFilterYearOptions,
  getLaunchesFilterData,
} from "../../dataLayer/features/launches/launchesSelector";
import FilterOptions from "../FilterOptions";
import "./drawer.scss";
import { LAUNCH_STATUS } from "./helper";

const Drawer = ({ isOpen = false, onClose = noop }) => {
  const dispatch = useDispatch();
  const yearOptions = useSelector(getFilterYearOptions, shallowEqual);
  const { launchYear, launchStatus } = useSelector(
    getLaunchesFilterData,
    shallowEqual
  );
  const onOptionClick = (data) => {
    dispatch(updateFilterData(data));
  };

  const onResetFilter = () => {
    dispatch(updateFilterData({ launchYear: "", launchStatus: "" }));
  };
  return (
    <Box className="sxl-drawer">
      <MuiDrawer
        transitionDuration={250}
        PaperProps={{ elevation: 1 }}
        disablePortal
        open={isOpen}
        anchor="right"
        onClose={onClose}
        disableScrollLock={false}
        classes={{
          paper: "sxl-d-paper-wrapper",
        }}
      >
        <Stack
          className="sxl-d-header"
          flexDirection={"row"}
          gap="16px"
          alignItems={"center"}
        >
          <img
            onClick={onClose}
            alt="cancel"
            src={cancel}
            className="sxl-d-h-icon"
          />
          <Typography variant="heading3" component="div">
            Filters
          </Typography>
        </Stack>
        <FilterOptions
          title="Launch year"
          options={yearOptions}
          valueKeyName="launchYear"
          selectedValue={launchYear}
          onOptionSelect={onOptionClick}
        />
        <FilterOptions
          title="Launch status"
          options={LAUNCH_STATUS}
          valueKeyName="launchStatus"
          selectedValue={launchStatus}
          onOptionSelect={onOptionClick}
          className="sxl-d-launch-status"
        />
        <Typography
          color={"foundationColors.action.brand"}
          className="sxl-d-reset"
          onClick={onResetFilter}
          sx={sx}
        >
          Reset Filter
        </Typography>
      </MuiDrawer>
    </Box>
  );
};

export default Drawer;

const sx = {
  border: "1px solid",
  borderColor: "foundationColors.sction.brand",
};
