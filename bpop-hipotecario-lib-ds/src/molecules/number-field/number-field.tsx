import React, { FC } from "react";

import { NumberFieldProps } from "../../types";
import { InputTextFieldBase } from "../input-text-field-base";

import { validateNumberFieldValue } from "./helpers";

const NumberField: FC<NumberFieldProps> = ({ dataTestId, id = "number-field", ...props }) => {
  return (
    <InputTextFieldBase
      id={id}
      dataTestId={dataTestId}
      type={"tel"}
      validateInputValue={validateNumberFieldValue}
      {...props}
    />
  );
};

export default NumberField;
