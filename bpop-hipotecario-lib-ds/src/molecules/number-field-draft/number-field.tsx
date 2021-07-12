import classNames from "classnames";
import React, { useRef, useState } from "react";

import { InputBase } from "../../atoms/input-base";
import { Label } from "../../atoms/label";
import { Typography, validStatuses as typographyValidStatuses } from "../../atoms/typography";

import { validateNumberFieldValue } from "./helpers";
import { NumberFieldProps } from "./number-field.d";
import textFieldStyles from "./number-field.module.css";

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
  const textFieldClassname = classNames(textFieldStyles["wrapper"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const showCaption = caption && status && typographyValidStatuses.includes(status);
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || validateNumberFieldValue(event.target.value)) {
      setLocalValue(event.target.value);
    }
    onChange && onChange(event);
  };
  return (
    <div className={textFieldClassname}>
      <Label htmlFor={id}>{label}</Label>
      <InputBase
        ref={inputRef}
        type={"tel"}
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
      {showCaption && (
        <Typography variant={"body-sm"} component={"span"} lineHeight={"body-sm"} status={status}>
          {caption}
        </Typography>
      )}
    </div>
  );
};

export default React.memo(NumberField);
