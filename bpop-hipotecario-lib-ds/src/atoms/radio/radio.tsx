import classNames from "classnames";
import React, { ChangeEvent, FC, useRef } from "react";

import { addClassToElement, removeClassFromElement } from "../../helpers";
import { InputBase } from "../input-base";
import { HiddenInputProps } from "../../types";

import radioStyles from "./radio.module.css";

const Radio: FC<HiddenInputProps> = ({ id, disabled, hasError, value, onChange, onFocus, onBlur, onClick }) => {
  const wrapperClassName = classNames(radioStyles["wrapper"], {
    [radioStyles["wrapper--enabled"]]: !disabled && !hasError,
    [radioStyles["wrapper--error"]]: !disabled && hasError,
    [radioStyles["wrapper--disabled"]]: disabled,
  });
  const controlRef = useRef<HTMLElement>(null);

  const handleMouseEnter = () => {
    addClassToElement(controlRef.current, radioStyles["control--hover"], !disabled);
  };
  const handleMouseLeave = () => {
    removeClassFromElement(controlRef.current, radioStyles["control--hover"], !disabled);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      addClassToElement(controlRef.current, radioStyles["control--checked"]);
    } else {
      removeClassFromElement(controlRef.current, radioStyles["control--checked"]);
    }
    onChange && onChange(event);
  };
  return (
    <label className={wrapperClassName}>
      <InputBase
        id={id}
        type="radio"
        fillable={false}
        hidden={true}
        value={value}
        onClick={onClick}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
      <span
        ref={controlRef}
        className={radioStyles["control"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={radioStyles["control__circle"]} />
      </span>
    </label>
  );
};

export default Radio;
