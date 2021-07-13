import React, { memo } from "react";

import { InputFieldBase } from "../input-field-base";

import { TextFieldProps } from "./text-field.d";

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  status,
  caption,
  placeholder,
  size,
  maxLength,
  disabled,
  validateInputValue,
  onChange,
  onFocus,
  onBlur,
  value = "",
}) => {
  return (
    <InputFieldBase
      id={id}
      type={"text"}
      label={label}
      caption={caption}
      size={size}
      value={value}
      placeholder={placeholder}
      status={status}
      maxLength={maxLength}
      disabled={disabled}
      validateInputValue={validateInputValue}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default memo(TextField);
