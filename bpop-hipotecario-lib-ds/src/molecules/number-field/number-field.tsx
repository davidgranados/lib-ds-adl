import React, { memo } from "react";

import { NumberFieldProps } from "../../types";
import { InputFieldBase } from "../input-field-base";

import { validateNumberFieldValue } from "./helpers";

const NumberField: React.FC<NumberFieldProps> = ({
  id,
  label,
  status,
  caption,
  placeholder,
  size,
  maxLength,
  disabled,
  onChange,
  onFocus,
  onBlur,
  value = "",
}) => {
  return (
    <InputFieldBase
      id={id}
      type={"tel"}
      label={label}
      caption={caption}
      size={size}
      value={value}
      placeholder={placeholder}
      status={status}
      maxLength={maxLength}
      disabled={disabled}
      validateInputValue={validateNumberFieldValue}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default memo(NumberField);
