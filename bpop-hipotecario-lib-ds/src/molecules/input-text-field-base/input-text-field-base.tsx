import React, { useState } from "react";

import { InputFieldCaptionStatus, InputTextFieldBaseProps } from "../../types";
import { InputFieldLabel } from "../../atoms/input-field-label";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { InputTextBase } from "../../atoms/input-text-base";

const InputTextFieldBase: React.FC<InputTextFieldBaseProps> = ({
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
  const captionStatus: InputFieldCaptionStatus = hasError ? "error" : "default";

  const [localValue, setLocalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || !validateInputValue || validateInputValue(event.target.value)) {
      setLocalValue(event.target.value);
    }
    onChange && onChange(event);
  };
  return (
    <div>
      <InputFieldLabel htmlFor={id}>{label}</InputFieldLabel>
      <InputTextBase
        id={id}
        type={type}
        specialStatus={inputStatus}
        onChange={handleChange}
        value={localValue}
        {...props}
      />
      {caption && <InputFieldCaption status={captionStatus}>{caption}</InputFieldCaption>}
    </div>
  );
};

export default InputTextFieldBase;
