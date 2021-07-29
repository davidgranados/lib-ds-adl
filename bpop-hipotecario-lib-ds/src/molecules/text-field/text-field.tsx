import React, { FC } from "react";

import { TextFieldProps } from "../../types";
import { InputTextFieldBase } from "../input-text-field-base";

const TextField: FC<TextFieldProps> = ({ id = "text-field", ...props }) => {
  return <InputTextFieldBase id={id} type={"text"} {...props} />;
};

export default TextField;
