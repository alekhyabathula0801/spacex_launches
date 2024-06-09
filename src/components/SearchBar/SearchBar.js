import { Box, InputAdornment, TextField } from "@mui/material";
import { noop } from "lodash-es";
import PropTypes from "prop-types";
import React from "react";
import search from "../../assets/search.svg";
import "./searchBar.scss";

const SearchBar = ({
  inputProps = {},
  value = "",
  autoFocus = false,
  isDisabled = false,
  suffix = null,
  onSuffixClick = noop,
  onChange = noop,
  InputProps = {},
  placeholder = "Search on Rocket",
  isLoading = false,
  ...props
}) => {
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
    if (suffix) {
      return (
        <InputAdornment
          disableTypography={isDisabled}
          disablePointerEvents={isDisabled}
          position="end"
        >
          <div
            onClick={onSuffixClick}
            className={`search-bar-suffix-wrapper ${
              onSuffixClick && "sb-suffix-clickable"
            }`}
          >
            {suffix}
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        autoFocus={autoFocus}
        InputProps={{
          startAdornment: InputPrefix(),
          endAdornment: InputSuffix(),
          customvariant: "searchBar",
          inputProps: inputProps,
          ...InputProps,
        }}
        className={"sbw-text-field"}
        {...props}
      />
    </Box>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  inputProps: PropTypes.object,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  isDisabled: PropTypes.bool,
  suffix: PropTypes.node,
  onSuffixClick: PropTypes.func,
  onChange: PropTypes.func,
  InputProps: PropTypes.object,
  placeholder: PropTypes.string,
  isLoading: PropTypes.bool,
};
