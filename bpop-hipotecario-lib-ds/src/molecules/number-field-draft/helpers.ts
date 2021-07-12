export const ONLY_NUMBERS_REGEX = /^\d*$/;
export const validateNumberFieldValue = (value?: string | number): boolean => {
  if (typeof value === "string") {
    return ONLY_NUMBERS_REGEX.test(value);
  }
  return true;
};
