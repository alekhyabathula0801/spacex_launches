import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { isEmpty, noop } from "lodash-es";
import { array, bool, func, oneOfType, string } from "prop-types";
import React from "react";
import "./filterOptions.scss";

const FilterOptions = ({
  title = "",
  options = [],
  valueKeyName = "",
  selectedValue = "",
  onOptionSelect = noop,
  className = "",
}) => {
  if (isEmpty(options)) {
    return null;
  }
  return (
    <Box className={className}>
      <Typography variant="heading4">{title}</Typography>
      <div>
        <Stack
          className="sxl-d-filter-options-wrapper"
          flexDirection={"row"}
          flexWrap="wrap"
          gap={"12px"}
        >
          {options?.map((status) => {
            let value = status,
              label = status;
            if (typeof status === "object") {
              value = status.value;
              label = status.label;
            }
            const isSelected = value === selectedValue;
            const backgroundColor = isSelected
              ? "foundationColors.action.brand"
              : "foundationColors.secondary.profitGreen.300";
            const onClick = () => {
              onOptionSelect({ [valueKeyName]: value });
            };
            return (
              <Typography
                sx={{
                  backgroundColor,
                }}
                onClick={onClick}
                color="foundationColors.supporting.white"
                key={label}
                className="sxl-d-fow-option"
              >
                {label}
              </Typography>
            );
          })}
        </Stack>
      </div>
    </Box>
  );
};

export default FilterOptions;

FilterOptions.propTypes = {
  title: string,
  options: array,
  valueKeyName: string,
  selectedValue: oneOfType([string, bool]),
  onOptionSelect: func,
  className: string,
};
