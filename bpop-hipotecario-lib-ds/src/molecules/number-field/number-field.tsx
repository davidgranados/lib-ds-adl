import React, { FC } from "react";

import { NumberFieldProps } from "../../types";
import { InputTextFieldBase } from "../input-text-field-base";

import { validateNumberFieldValue } from "./helpers";

const NumberField: FC<NumberFieldProps> = ({ id = "number-field", ...props }) => {
  return <InputTextFieldBase id={id} type={"tel"} validateInputValue={validateNumberFieldValue} {...props} />;
};

export default NumberField;
