import React from "react";

import styles from "./number-field.module.css";
import { Label } from "../../atoms/label";

const ONLY_NUMBERS = /^\d*(?:[.,]\d*)?$/;

export interface IProps {
  id: string;
  label: string;
  isDisabled?: boolean;
  maxLength?: number;
  hasError?: boolean;
  caption?: string;
  placeholder?: string;
  value?: number;
  onChange: (v: number | null) => void;
}

const NumberField: React.FC<IProps> = ({
  id,
  label,
  isDisabled,
  hasError,
  maxLength,
  caption,
  placeholder,
  value,
  onChange,
}) => {
  let lastValue = value || null;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateInputType(event);
    onChange(lastValue);
  };

  const validateInputType = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!ONLY_NUMBERS.test(event.target.value)) {
      event.target.value = lastValue ? `${lastValue}` : "";
      lastValue = event.target.value === "" ? null : +event.target.value;
    } else lastValue = event.target.value === "" ? null : +event.target.value;
  };

  return (
    <div>
      <Label id={id}>{label}</Label>
      <div className={`${styles["input-wrapper"]} ${isDisabled && styles["disabled"]} ${hasError && styles["error"]}`}>
        <input
          data-testid="input"
          id={id}
          type="text"
          maxLength={maxLength}
          disabled={isDisabled}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          className={styles["input"]}
        />
      </div>
      {caption && <span className={`${styles["caption"]} ${hasError && styles["error"]}`}>{caption}</span>}
    </div>
  );
};

export default React.memo(NumberField);
