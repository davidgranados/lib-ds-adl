import React, { FC } from "react";

import { TextFieldProps } from "../../types";
import { InputTextFieldBase } from "../input-text-field-base";

const TextField: FC<TextFieldProps> = ({ value = "", ...props }) => {
  return <InputTextFieldBase type={"text"} value={value} {...props} />;
};

export default TextField;
