export const getId = (
  id: string,
  dataTestId?: string,
  camelCase?: boolean
): {
  id: string;
  dataTestId?: string;
  "data-testid"?: string;
} => {
  return {
    id: id,
    [`${camelCase ? "dataTestId" : "data-testid"}`]: dataTestId ? dataTestId : id,
  };
};
export const getSuffixedId = (
  id: string,
  suffix: string,
  dataTestId?: string,
  camelCase?: boolean
): {
  id: string;
  dataTestId?: string;
  "data-testid"?: string;
} => {
  return {
    id: `${id}-${suffix}`,
    [`${camelCase ? "dataTestId" : "data-testid"}`]: `${dataTestId ? `${dataTestId}-${suffix}` : `${id}-${suffix}`}`,
  };
};
