import classNames from "classnames";
import React, { useRef, useState, memo } from "react";

import { FieldCaption } from "../../atoms/caption-field";
import { InputBase } from "../../atoms/input-base";
import { Label } from "../../atoms/label";

import { InputFieldBaseProps } from "./input-field-base.d";
import InputFieldStyles from "./input-field-base.module.css";

const InputFieldBase: React.FC<InputFieldBaseProps> = ({
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
  type = "text",
  value = "",
}) => {
  const textFieldClassname = classNames(InputFieldStyles["wrapper"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || !validateInputValue || validateInputValue(event.target.value)) {
      setLocalValue(event.target.value);
    }
    onChange && onChange(event);
  };
  return (
    <div className={textFieldClassname}>
      <Label htmlFor={id}>{label}</Label>
      <InputBase
        ref={inputRef}
        type={type}
        id={id}
        size={size}
        value={localValue}
        placeholder={placeholder}
        status={status}
        maxLength={maxLength}
        disabled={disabled}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {caption && <FieldCaption status={status}>{caption}</FieldCaption>}
    </div>
  );
};

export default memo(InputFieldBase);
