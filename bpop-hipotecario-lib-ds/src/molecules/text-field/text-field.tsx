import React, { FC } from "react";

import { TextFieldProps } from "../../types";
import { InputTextFieldBase } from "../input-text-field-base";

const TextField: FC<TextFieldProps> = ({ dataTestId, id = "text-field", ...props }) => {
  return <InputTextFieldBase id={id} dataTestId={dataTestId} type={"text"} {...props} />;
};

export default TextField;
