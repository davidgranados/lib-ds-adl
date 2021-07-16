import React, { FC } from "react";

import { NumberFieldProps } from "../../types";
import { InputFieldBase } from "../input-field-base";

import { validateNumberFieldValue } from "./helpers";

const NumberField: FC<NumberFieldProps> = ({ value = "", ...props }) => {
  return <InputFieldBase type={"tel"} value={value} validateInputValue={validateNumberFieldValue} {...props} />;
};

export default NumberField;
