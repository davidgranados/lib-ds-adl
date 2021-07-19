import React, { useState } from "react";

import { FieldCaption } from "../../atoms/caption-field";
import { InputBase } from "../../atoms/input-base";
import { Label } from "../../atoms/label";
import { InputFieldBaseProps } from "../../types";

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
  const inputStatus = hasError ? "error" : undefined;
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || !validateInputValue || validateInputValue(event.target.value)) {
      setLocalValue(event.target.value);
    }
    onChange && onChange(event);
  };
  return (
    <div>
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
