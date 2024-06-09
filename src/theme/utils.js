// customize or override the default values of a predefined theme
import { createTheme } from "@mui/material";
import THEME from "./constants";
import {
	customVariantsOutlinedInput,
	inputAdornmentStyleOverRides,
	inputLabelStyleOverRides,
	outlinedTextFieldStyleOverRides
} from "./textfield";
import baseTypographyConfig, {
	customTypographyVariantProps
} from "./typography";

const getTheme = () => {
  const { colors, ...uiConfig } = THEME;
  const theme = {
    palette: {
      primary: {
        main: colors.primary.brand,
      },
      secondary: {
        main: colors.action.brand,
      },
    foundationColors: colors,
    },
    typography: baseTypographyConfig(colors, uiConfig),
    components: {
      MuiTypography: {
        variants: customTypographyVariantProps(colors, uiConfig),
      },
      MuiOutlinedInput: {
        variants: customVariantsOutlinedInput(colors),
        styleOverrides: outlinedTextFieldStyleOverRides(colors, uiConfig),
      },
      MuiInputLabel: {
        styleOverrides: inputLabelStyleOverRides(colors, uiConfig),
      },
      MuiInputAdornment: {
        styleOverrides: inputAdornmentStyleOverRides(colors),
      },
    },
  };
  return createTheme(theme);
};

export default getTheme;
