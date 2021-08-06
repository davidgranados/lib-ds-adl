import classNames from "classnames";
import React, { useCallback, useEffect, useRef } from "react";

import { RadioButtonProps } from "../../types/input-field";
import { getId, getSuffixedId } from "../../helpers";

import { checkThisRadio } from "./helpers";

import styles from "./radio-button.module.css";

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled,
  label,
  checked,
  onChange,
  name,
  fullWidth,
  dataTestId,
  id = "radio-button",
  ...props
}) => {
  const wrapperClassName = classNames(styles["wrapper"], {
    [styles["wrapper--enabled"]]: !disabled,
    [styles["wrapper--disabled"]]: disabled,
    [styles["full-width"]]: fullWidth,
  });

  const wrapperRef = useRef<HTMLLabelElement>(null);

  const _checkThisRadio = useCallback((): void => {
    if (wrapperRef.current && name) checkThisRadio(wrapperRef.current, name);
  }, [name]);

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    _checkThisRadio();
    onChange && onChange(event);
  };

  useEffect(() => {
    if (checked) _checkThisRadio();
  }, [_checkThisRadio, checked]);

  return (
    <label {...getSuffixedId(id, "wrapper", dataTestId)} ref={wrapperRef} className={wrapperClassName}>
      <span className={styles["control-wrapper"]}>
        <input
          {...getId(id, dataTestId)}
          className={styles["input"]}
          type="radio"
          name={name}
          disabled={disabled}
          defaultChecked={checked}
          onChange={handleInputOnChange}
          {...props}
        />
        <span className={styles["control"]}>
          <span className={styles["control__circle"]} />
        </span>
      </span>
      <span className={styles["label"]}>{label}</span>
    </label>
  );
};

export default RadioButton;
