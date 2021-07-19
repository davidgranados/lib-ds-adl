import classNames from "classnames";
import React, { useState } from "react";

import { FieldCaption } from "../../atoms/caption-field";
import { InputBase } from "../../atoms/input-base";
import { Label } from "../../atoms/label";
import { InputFieldBaseProps } from "../../types";

import InputFieldStyles from "./input-field-base.module.css";

const InputFieldBase: React.FC<InputFieldBaseProps> = ({
  onChange,
  id,
  label,
  caption,
  validateInputValue,
  type = "text",
  value = "",
  hasError = false,
  ...props
}) => {
  const textFieldClassname = classNames(InputFieldStyles["wrapper"]);
  const inputStatus = hasError ? "error" : undefined;
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || !validateInputValue || validateInputValue(event.target.value)) {
      setLocalValue(event.target.value);
    }
    onChange && onChange(event);
  };
  return (
    <div className={textFieldClassname}>
      <Label htmlFor={id} variant={"input-field-base"} fontWeight={"medium"}>
        {label}
      </Label>
      <InputBase
        id={id}
        type={type}
        specialStatus={inputStatus}
        onChange={handleChange}
        value={localValue}
        {...props}
      />
      {caption && <FieldCaption status={inputStatus}>{caption}</FieldCaption>}
    </div>
  );
};

export default InputFieldBase;
