import React, { FC, ReactNode } from "react";
import NumberFormat, { NumberFormatValues } from "react-number-format";

import styles from "./input-money.module.css";
import { InputFieldCaptionStatus, InputTextBaseProps } from "../..";
import { InputTextBase } from "../../atoms/input-text-base";
import { InputFieldLabel } from "../../atoms/input-field-label";
import { InputFieldCaption } from "../../atoms/input-field-caption";

export interface InputMoneyProps extends Omit<InputTextBaseProps, "onChange" | "type"> {
  label: string;
  type: "number" | "percentage";
  value?: number;
  tooltip?: ReactNode;
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
  type,
  tooltip,
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
      {tooltip}
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
        prefix={type === "number" ? "$" : undefined}
        suffix={type === "percentage" ? "%" : undefined}
      />
      {caption && <InputFieldCaption status={captionStatus}>{caption}</InputFieldCaption>}
    </div>
  );
};

export default InputMoney;
