import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { element, func, node, oneOfType } from "prop-types";
import React from "react";
import getTheme from "./utils";

//a wrapper component that decorates other components with theme-related functionality
//injects theme-related props and override default styles based on the defined theme.

const theme = getTheme();
const ThemeWrapper = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeWrapper;

ThemeWrapper.propTypes = {
  children: oneOfType([node, func, element]),
};
