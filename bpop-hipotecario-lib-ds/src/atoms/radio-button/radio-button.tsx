import classNames from "classnames";
import React, { useCallback, useEffect, useRef } from "react";

import { RadioButtonProps } from "../../types/input-field";
import { addClassToElement, removeClassFromElement } from "../../helpers";

import styles from "./radio-button.module.css";

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

  const wrapperRef = useRef(null);

  const handleInputOnChange = useCallback(
    (event?: React.ChangeEvent<HTMLInputElement>) => {
      const allRadioButtonsInDOM = Array.from(document.querySelectorAll(`input[type="radio"][name="${name}"]`));
      const allWrappersInDOM = allRadioButtonsInDOM.map((input) => {
        return input.closest(`.${styles["wrapper"]}`);
      });
      allWrappersInDOM.forEach((wrapperElement) => {
        removeClassFromElement(wrapperElement, styles["wrapper--checked"]);
      });
      addClassToElement(wrapperRef.current, styles["wrapper--checked"]);
      event && onChange && onChange(event);
    },
    [name, onChange]
  );

  useEffect(() => {
    if (checked) handleInputOnChange();
  }, [checked, handleInputOnChange]);

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
          checked={checked}
          disabled={disabled}
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
