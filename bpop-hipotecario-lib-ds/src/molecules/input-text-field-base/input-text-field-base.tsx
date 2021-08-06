import React, { useState } from "react";

import { getSuffixedId } from "../../helpers";
import { InputFieldCaptionStatus, InputTextFieldBaseProps } from "../../types";
import { InputFieldLabel } from "../../atoms/input-field-label";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { InputTextBase } from "../../atoms/input-text-base";
import { TooltipIcon } from "../../atoms/tooltip-icon";

const InputTextFieldBase: React.FC<InputTextFieldBaseProps> = ({
  label,
  caption,
  dataTestId,
  validateInputValue,
  onChange,
  hasError = false,
  tooltipIcon,
  tooltipTextTitle,
  tooltipTextBody,
  tooltipMarginLeft,
  tooltipMarginRight,
  withTooltip = false,
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
    <div {...getSuffixedId(id, "wrapper", dataTestId)}>
      <InputFieldLabel {...getSuffixedId(id, "label", dataTestId, true)} htmlFor={id}>
        {label}
      </InputFieldLabel>
      {withTooltip && (
        <TooltipIcon
          {...getSuffixedId(id, "tooltip-icon", dataTestId, true)}
          icon={tooltipIcon}
          textTitle={tooltipTextTitle}
          textBody={tooltipTextBody}
          marginLeft={tooltipMarginLeft}
          marginRight={tooltipMarginRight}
        />
      )}
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
        <InputFieldCaption {...getSuffixedId(id, "caption", dataTestId, true)} status={captionStatus}>
          {caption}
        </InputFieldCaption>
      )}
    </div>
  );
};

export default InputTextFieldBase;
