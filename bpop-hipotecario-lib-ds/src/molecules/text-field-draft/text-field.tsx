import classNames from "classnames";
import React, { useRef } from "react";

import { InputBase } from "../../atoms/input-base";
import { Label } from "../../atoms/label";
import { Typography, validStatuses as typographyValidStatuses } from "../../atoms/typography";
import { DefaultFieldProps } from "../../types";

import textFieldStyles from "./text-field.module.css";

const TextField: React.FC<DefaultFieldProps> = ({
  id,
  label,
  value,
  status,
  caption,
  placeholder,
  size,
  disabled,
  onChange,
  onFocus,
  onBlur,
  onInput,
}) => {
  const textFieldClassname = classNames(textFieldStyles["wrapper"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const showCaption = caption && status && typographyValidStatuses.includes(status);
  return (
    <div className={textFieldClassname}>
      <Label htmlFor={id}>{label}</Label>
      <InputBase
        ref={inputRef}
        type={"text"}
        id={id}
        size={size}
        value={value}
        placeholder={placeholder}
        status={status}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onInput={onInput}
      />
      {showCaption && (
        <Typography variant={"body-sm"} component={"span"} lineHeight={"body-sm"} status={status}>
          {caption}
        </Typography>
      )}
    </div>
  );
};

export default React.memo(TextField);
