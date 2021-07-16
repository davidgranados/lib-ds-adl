import classNames from "classnames";
import React, { FC, useRef } from "react";

import { InputBase } from "../input-base";
import { HiddenInputProps } from "../../types";

import radioStyles from "./radio.module.css";

const Radio: FC<HiddenInputProps> = ({ id, name, disabled, hasError, value, onChange, onFocus, onBlur, onClick }) => {
  const wrapperClassName = classNames(radioStyles["wrapper"], {
    [radioStyles["wrapper--enabled"]]: !disabled && !hasError,
    [radioStyles["wrapper--error"]]: !disabled && hasError,
    [radioStyles["wrapper--disabled"]]: disabled,
  });
  const controlRef = useRef<HTMLElement>(null);

  return (
    <label className={wrapperClassName}>
      <InputBase
        id={id}
        name={name}
        type="radio"
        fillable={false}
        hidden={true}
        value={value}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
      <span ref={controlRef} className={radioStyles["control"]}>
        <span className={radioStyles["control__circle"]} />
      </span>
    </label>
  );
};

export default Radio;
