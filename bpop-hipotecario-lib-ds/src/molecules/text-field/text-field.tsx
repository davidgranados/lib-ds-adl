import React, { FC } from "react";

import { TextFieldProps } from "../../types";
import { InputFieldBase } from "../input-field-base";

const TextField: FC<TextFieldProps> = ({ value = "", ...props }) => {
  return <InputFieldBase type={"text"} value={value} {...props} />;
};

export default TextField;
