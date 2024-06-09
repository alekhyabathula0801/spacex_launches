import baseTypographyConfig from "../typography";

export const inputLabelStyleOverRides = (colors = {}, uiConfig = {}) => {
  const typographyVariants = baseTypographyConfig(colors, uiConfig);
  return {
    root: {
      ...typographyVariants.body2,
      color: colors?.content?.secondary,
      fontSize: "14px !important",
      top: "2px",
      "&.Mui-focused, &.Mui-error": {
        color: colors?.content?.secondary,
      },
      "&.Mui-disabled": {
        color: colors?.supporting?.cadetBlue,
        opacity: 0.5,
      },
    },
    shrink: {
      ...typographyVariants.body5,
      fontSize: "12px !important",
      color: colors.content.secondary,
    },
  };
};

export const inputAdornmentStyleOverRides = (colors) => {
  return {
    root: {
      marginRight: 1,
    },
    disablePointerEvents: {
      color: colors?.supporting?.cadetBlue,
    },
  };
};

export const outlinedTextFieldStyleOverRides = (colors = {}, uiConfig = {}) => {
  const typographyVariants = baseTypographyConfig(colors, uiConfig);
  return {
    root: {
      ...typographyVariants.body2,
      backgroundColor: `${colors?.base?.foreground}`,
      border: `1px solid ${colors?.supporting?.athensGrey}`,
      borderRadius: 8,
      "&.Mui-error": {
        borderColor: colors?.secondary?.lossRed["400"],
      },
      "&.Mui-disabled": {
        backgroundColor: colors?.base?.foreground,
        borderColor: colors?.supporting?.athensGrey,
        "> .MuiInputAdornment-root": {
          opacity: "0.5",
        },
      },
    },
    input: {
      "&.Mui-disabled": {
        color: colors?.supporting?.cadetBlue,
        cursor: "default",
        WebkitTextFillColor: colors?.supporting?.cadetBlue,
        opacity: 0.5,
      },
    },
    notchedOutline: {
      border: "none",
    },
  };
};

export const customVariantsOutlinedInput = (colors = {}) => {
  return [
    {
      props: { customvariant: "searchBar" },
      style: {
        borderRadius: "24px",
        backgroundColor: `${colors?.base?.background}`,
        border: "none",
        "& .MuiOutlinedInput-input": {
          padding: "0px 8px",
          borderRadius: "24px",
          height: "40px",
        },
        ".MuiInputBase-root": {
          backgroundColor: `${colors?.base?.background}`,
          borderRadius: "12px",
          height: "46px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none !important",
        },
        "&.Mui-focused": {
          backgroundColor: `${colors?.base?.background}`,
        },
        "&:hover": {
          backgroundColor: `${colors?.base?.background}`,
        },
      },
    },
  ];
};
