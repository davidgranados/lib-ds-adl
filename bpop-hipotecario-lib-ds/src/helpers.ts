export const addClassToElement = (
  element: HTMLElement | Element | null,
  className: string,
  verification = true
): void => {
  verification && element && element.classList.add(className);
};
export const removeClassFromElement = (
  element: HTMLElement | Element | null,
  className: string,
  verification = true
): void => {
  verification && element && element.classList.remove(className);
};
export const toggleClassFromElement = (
  element: HTMLElement | Element | null,
  className: string,
  verification = true
): void => {
  verification && element && element.classList.toggle(className);
};
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
