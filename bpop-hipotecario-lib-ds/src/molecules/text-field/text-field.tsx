import React from "react";

import styles from "./text-field.module.css";
import { Label } from "../../atoms/label";

export interface IProps {
  id: string;
  label: string;
  isDisabled?: boolean;
  hasError?: boolean;
  caption?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (v: string | number) => void;
}

const TextField: React.FC<IProps> = ({ id, label, isDisabled, hasError, caption, placeholder, value, onChange }) => {
  return (
    <div>
      <Label id={id}>{label}</Label>
      <div className={`${styles["input-wrapper"]} ${isDisabled && styles["disabled"]} ${hasError && styles["error"]}`}>
        <input
          data-testid="input"
          id={id}
          value={value}
          disabled={isDisabled}
          placeholder={placeholder}
          onChange={(v) => onChange(v.target.value)}
          className={styles["input"]}
        />
      </div>
      {caption && <span className={`${styles["caption"]} ${hasError && styles["error"]}`}>{caption}</span>}
    </div>
  );
};

export default React.memo(TextField);
