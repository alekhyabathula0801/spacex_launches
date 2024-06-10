import { Box, InputAdornment, TextField } from "@mui/material";
import { isEmpty } from "lodash-es";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import cancel from "../../assets/cancel.svg";
import search from "../../assets/search.svg";
import { updateFilterData } from "../../dataLayer/features/launches/launchesAction";
import {
  getIsFetchingLaunches,
  getLaunchesErrorData,
  getLaunchesSearchText,
} from "../../dataLayer/features/launches/launchesSelector";
import "./searchBar.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const isDisabled = useSelector(getIsFetchingLaunches, shallowEqual);
  const { isFetchFailed } = useSelector(getLaunchesErrorData, shallowEqual);
  const searchText = useSelector(getLaunchesSearchText, shallowEqual);

  const onChange = (event) => {
    const value = event.target.value;
    dispatch(updateFilterData({ searchText: value }));
  };

  const onClear = () => {
    dispatch(updateFilterData({ searchText: "" }));
  };

  const InputPrefix = () => {
    return (
      <InputAdornment
        disableTypography={isDisabled}
        disablePointerEvents={isDisabled}
        position="start"
      >
        <div className={`search-bar-prefix-wrapper`}>
          <img src={search} size={16} alt="search" />
        </div>
      </InputAdornment>
    );
  };
  const InputSuffix = () => {
    if (!isEmpty(searchText)) {
      return (
        <InputAdornment
          disableTypography={isDisabled || isFetchFailed}
          disablePointerEvents={isDisabled || isFetchFailed}
          position="end"
        >
          <div
            onClick={onClear}
            className={`search-bar-suffix-wrapper sb-suffix-clickable`}
          >
            <img src={cancel} size={16} alt="search" />
          </div>
        </InputAdornment>
      );
    } else {
      return null;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "foundationColors.base.foreground",
      }}
      className={`search-bar-wrapper`}
    >
      <TextField
        fullWidth
        placeholder={"Search on Rocket"}
        value={searchText}
        disabled={isDisabled}
        onChange={onChange}
        InputProps={{
          startAdornment: InputPrefix(),
          endAdornment: InputSuffix(),
          customvariant: "searchBar",
        }}
        className={"sbw-text-field"}
      />
    </Box>
  );
};

export default SearchBar;
