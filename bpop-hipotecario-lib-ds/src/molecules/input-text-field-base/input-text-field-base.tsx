import React, { useState } from "react";

import { InputFieldCaptionStatus, InputTextFieldBaseProps } from "../../types";
import { InputFieldLabel } from "../../atoms/input-field-label";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { InputTextBase } from "../../atoms/input-text-base";

const InputTextFieldBase: React.FC<InputTextFieldBaseProps> = ({
  label,
  caption,
  labelId,
  wrapperId,
  captionId,
  dataTestId,
  labelDataTestId,
  wrapperDataTestId,
  captionDataTestId,
  validateInputValue,
  onChange,
  hasError = false,
  value = "",
  type = "text",
  id = "input-text-field-base",
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
    <div id={wrapperId || `${id}-wrapper`} data-testid={wrapperDataTestId || wrapperId || `${id}-wrapper`}>
      <InputFieldLabel id={labelId || `${id}-label`} dataTestId={labelDataTestId} htmlFor={id}>
        {label}
      </InputFieldLabel>
      <InputTextBase
        id={id}
        dataTestId={dataTestId}
        type={type}
        specialStatus={inputStatus}
        value={localValue}
        onChange={handleChange}
        {...props}
      />
      {caption && (
        <InputFieldCaption id={captionId || `${id}-caption`} dataTestId={captionDataTestId} status={captionStatus}>
          {caption}
        </InputFieldCaption>
      )}
    </div>
  );
};

export default InputTextFieldBase;
