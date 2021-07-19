import classNames from "classnames";
import React, { useRef } from "react";

import { RadioFieldProps } from "../../types/input-field";
import { addClassToElement, removeClassFromElement } from "../../helpers";

import radioFieldStyles from "./radio-field.module.css";

const RadioField: React.FC<RadioFieldProps> = ({ disabled, label, onChange, name, ...props }) => {
  const wrapperClassName = classNames(radioFieldStyles["wrapper"], {
    [radioFieldStyles["wrapper--enabled"]]: !disabled,
    [radioFieldStyles["wrapper--disabled"]]: disabled,
  });

  const wrapperRef = useRef(null);

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const allRadioFieldsInDOM = document.querySelectorAll(`input[name="${name}"]`);
    const allWrappersInDOM = Array.from(allRadioFieldsInDOM).map((input) => {
      return input.closest(`.${radioFieldStyles["wrapper"]}`);
    });
    allWrappersInDOM.forEach((wrapperElement) => {
      removeClassFromElement(wrapperElement, radioFieldStyles["wrapper--checked"]);
    });
    addClassToElement(wrapperRef.current, radioFieldStyles["wrapper--checked"]);
    onChange && onChange(event);
  };
  return (
    <label ref={wrapperRef} className={wrapperClassName}>
      <span className={radioFieldStyles["control-wrapper"]}>
        <input
          className={radioFieldStyles["input"]}
          type="radio"
          name={name}
          disabled={disabled}
          onChange={handleInputOnChange}
          {...props}
        />
        <span className={radioFieldStyles["control"]}>
          <span className={radioFieldStyles["control__circle"]} />
        </span>
      </span>
      <span className={radioFieldStyles["label"]}>{label}</span>
    </label>
  );
};

export default RadioField;
