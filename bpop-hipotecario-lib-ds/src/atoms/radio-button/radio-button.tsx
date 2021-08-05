import classNames from "classnames";
import React, { useCallback, useEffect, useRef } from "react";

import { RadioButtonProps } from "../../types/input-field";

import styles from "./radio-button.module.css";
import { checkThisRadio } from "./helpers";

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled,
  label,
  checked,
  onChange,
  name,
  fullWidth,
  wrapperId,
  labelId,
  controlId,
  dataTestId,
  wrapperDataTestId,
  labelDataTestId,
  controlDataTestId,
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
    <label
      id={wrapperId || `${id}-wrapper`}
      data-testid={wrapperDataTestId || wrapperId || `${id}-wrapper`}
      ref={wrapperRef}
      className={wrapperClassName}
    >
      <span className={styles["control-wrapper"]}>
        <input
          id={id}
          data-testid={dataTestId || id}
          className={styles["input"]}
          type="radio"
          name={name}
          disabled={disabled}
          defaultChecked={checked}
          onChange={handleInputOnChange}
          {...props}
        />
        <span
          id={controlId || `${id}-control`}
          data-testid={controlDataTestId || controlId || `${id}-control`}
          className={styles["control"]}
        >
          <span className={styles["control__circle"]} />
        </span>
      </span>
      <span
        id={labelId || `${id}-label`}
        data-testid={labelDataTestId || labelId || `${id}-label`}
        className={styles["label"]}
      >
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
