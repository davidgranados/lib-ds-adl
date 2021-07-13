import {
  TypographyStatus,
  TypographyColor,
  TypographyComponent,
  TypographyVariant,
  TypographyWeight,
  VariantMappingType,
} from "./index";

export const validStatuses: TypographyStatus[] = ["success", "warning", "error"];
export const validComponents: TypographyComponent[] = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
export const validWeights: TypographyWeight[] = ["light", "regular", "medium", "semi-bold", "bold", "extra-bold"];

export const validColors: TypographyColor[] = [
  "highlight-900",
  "highlight-600",
  "highlight-400",
  "accent-900",
  "carbon-900",
  "carbon-mid-600",
  "carbon-mid-400",
  "carbon-mid-100",
  "carbon-light-100",
  "error-600",
  "warning-600",
  "success-600",
  "info-600",
];

export const validVariants: TypographyVariant[] = [
  "overline",
  "caption",
  "body-sm",
  "body-md",
  "body-lg",
  "subtitle-md",
  "subtitle-lg",
  "h6",
  "h5",
  "h4",
  "h3",
  "h2",
  "h1",
];

export const defaultVariantMapping: VariantMappingType = {
  overline: "span",
  caption: "span",
  "body-sm": "p",
  "body-md": "p",
  "body-lg": "p",
  "subtitle-md": "h6",
  "subtitle-lg": "h6",
  h6: "h6",
  h5: "h5",
  h4: "h4",
  h3: "h3",
  h2: "h2",
  h1: "h1",
};
