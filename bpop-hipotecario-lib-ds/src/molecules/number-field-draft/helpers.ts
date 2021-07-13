import { validateInput } from "../input-field-base";

export const ONLY_NUMBERS_REGEX = /^\d*$/;
export const validateNumberFieldValue: validateInput = (value) => {
  if (typeof value === "string") {
    return ONLY_NUMBERS_REGEX.test(value);
  }
  return true;
};
