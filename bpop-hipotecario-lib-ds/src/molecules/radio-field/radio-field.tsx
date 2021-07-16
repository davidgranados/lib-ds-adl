import React, { memo, useRef } from "react";

import { Radio } from "../../atoms/radio";
import { Label } from "../../atoms/label";
import { HiddenInputFieldProps } from "../../types";

import styles from "./radio-field.module.css";

const RadioField: React.FC<HiddenInputFieldProps> = ({ id, name, disabled, label, onChange }) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  return (
    <div className={styles["wrapper"]}>
      <Radio id={id} name={name} disabled={disabled} onChange={onChange} />
      <Label ref={labelRef} htmlFor={id} variant={"radio-field"} lineHeight={"body-sm"}>
        {label}
      </Label>
    </div>
  );
};

export default memo(RadioField);
