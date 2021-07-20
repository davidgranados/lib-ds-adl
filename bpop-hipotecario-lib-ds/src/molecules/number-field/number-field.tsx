import React, { FC } from "react";

import { NumberFieldProps } from "../../types";
import { InputTextFieldBase } from "../input-text-field-base";

import { validateNumberFieldValue } from "./helpers";

const NumberField: FC<NumberFieldProps> = ({ value = "", ...props }) => {
  return <InputTextFieldBase type={"tel"} value={value} validateInputValue={validateNumberFieldValue} {...props} />;
};

export default NumberField;
