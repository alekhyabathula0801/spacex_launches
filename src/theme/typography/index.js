const calcLineHeight = (fontSize, factor) => `${fontSize * factor}px`;
const headingTextFactor = 1.3;
const bodyTextFactor = 1.6;

// for custom variants, we are passing the fontFamily with the variant config itself.
const typographyVariantsConfig = (colors = {}, uiConfig = {}) => ({
  heading1: {
    fontSize: 28,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.Bold,
    lineHeight: calcLineHeight(28, headingTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  heading2: {
    fontSize: 22,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: calcLineHeight(22, headingTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  heading3: {
    fontSize: 18,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: calcLineHeight(18, headingTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  heading4: {
    fontSize: 16,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: calcLineHeight(16, headingTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body1: {
    fontSize: 14,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: calcLineHeight(14, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body2: {
    fontSize: 14,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.Regular,
    lineHeight: calcLineHeight(14, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body3: {
    fontSize: 12,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.Bold,
    lineHeight: calcLineHeight(12, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body4: {
    fontSize: 12,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: calcLineHeight(12, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body5: {
    fontSize: 12,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.Regular,
    lineHeight: calcLineHeight(12, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body6: {
    fontSize: 10,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.Regular,
    lineHeight: calcLineHeight(10, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body7: {
    fontSize: 10,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: calcLineHeight(10, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body8: {
    fontSize: 16,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.Regular,
    lineHeight: calcLineHeight(16, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body9: {
    fontSize: 12,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: calcLineHeight(12, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body10: {
    fontSize: 8,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: calcLineHeight(8, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  body11: {
    fontSize: 8,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.Regular,
    lineHeight: calcLineHeight(8, bodyTextFactor),
    fontFamily: uiConfig?.fontFamily?.join(","),
  },
  actionText: {
    fontSize: 16,
    color: colors?.content?.primary,
    fontWeight: uiConfig?.fontWeight?.SemiBold,
    lineHeight: "21px",
    fontFamily: uiConfig?.fontFamily?.join(","),
    textTransform: "uppercase",
  },
});

// for custom variants, we are passing the fontFamily with the variant config itself.
const baseTypographyConfig = (colors = {}, uiConfig = {}) => ({
  ...typographyVariantsConfig(colors, uiConfig),
  // the below font family is for the MUI components.
  fontFamily: uiConfig?.fontFamily?.join(","),
});

export default baseTypographyConfig;

export const customTypographyVariantProps = (colors = {}, uiConfig = {}) => {
  const mapper = [];
  const typographyVariants = typographyVariantsConfig(colors, uiConfig);
  const variantKeys = Object.keys(typographyVariants);
  variantKeys?.forEach((header) => {
    const fontWeightKeys = Object.keys(uiConfig?.fontWeight);
    fontWeightKeys.forEach((el) => {
      const data = {
        props: { variant: header, weight: el },
        style: {
          fontWeight: uiConfig?.fontWeight[el],
        },
      };
      mapper.push(data);
    });
  });
  return mapper;
};
