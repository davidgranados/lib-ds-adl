export type TypographyColor =
  | "highlight-900"
  | "highlight-600"
  | "highlight-400"
  | "accent-900"
  | "carbon-900"
  | "carbon-mid-600"
  | "carbon-mid-400"
  | "carbon-mid-100"
  | "carbon-light-100"
  | "error-600"
  | "warning-600"
  | "success-600"
  | "info-600";

export type TypographyVariant =
  | "overline"
  | "caption"
  | "body-sm"
  | "body-md"
  | "body-lg"
  | "subtitle-md"
  | "subtitle-lg"
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

export type TypographyLineHeight =
  | "overline"
  | "caption"
  | "body-sm"
  | "body-md"
  | "body-lg"
  | "subtitle-md"
  | "subtitle-lg"
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

export type TypographyWeight = "light" | "regular" | "medium" | "semi-bold" | "bold" | "extra-bold";
export type TypographyComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
export type TypographyStatus = "success" | "warning" | "error";
export type VariantMappingType = Record<TypographyVariant, TypographyComponent>;

export interface TypographyProps {
  variant: TypographyVariant;
  component?: TypographyComponent;
  status?: TypographyStatus;
  color?: TypographyColor;
  weight?: TypographyWeight;
  lineHeight?: TypographyLineHeight;
  children?: ReactNode;
}

export type FieldCaptionProps = Pick<TypographyProps, "status">;
