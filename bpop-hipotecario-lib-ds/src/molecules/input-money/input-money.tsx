import React, { FC } from "react";
import NumberFormat, { NumberFormatValues } from "react-number-format";

import styles from "./input-money.module.css";
import { InputFieldCaptionStatus, InputTextBaseProps } from "../..";
import { InputTextBase } from "../../atoms/input-text-base";
import { InputFieldLabel } from "../../atoms/input-field-label";
import { InputFieldCaption } from "../../atoms/input-field-caption";

export interface InputMoneyProps extends Omit<InputTextBaseProps, "onChange"> {
  label: string;
  value?: number;
  caption?: string;
  hasError?: boolean;
  onChange: ((values: NumberFormatValues) => void) | undefined;
}

const InputMoney: FC<InputMoneyProps> = ({
  id,
  value,
  hasError,
  caption,
  label,
  minLength,
  maxLength,
  placeholder,
  disabled,
  onChange,
  onBlur,
}) => {
  const inputStatus = hasError ? "error" : undefined;
  const captionStatus: InputFieldCaptionStatus = hasError ? "error" : "default";

  return (
    <div className={styles.wrapper}>
      <InputFieldLabel htmlFor={id}>{label}</InputFieldLabel>
      <NumberFormat
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        decimalScale={2}
        inputMode={"tel"}
        onValueChange={onChange}
        onBlur={onBlur}
        specialStatus={inputStatus}
        customInput={InputTextBase}
        thousandSeparator={true}
        allowNegative={false}
        prefix={"$"}
      />
      {caption && <InputFieldCaption status={captionStatus}>{caption}</InputFieldCaption>}
    </div>
  );
};

export default InputMoney;
