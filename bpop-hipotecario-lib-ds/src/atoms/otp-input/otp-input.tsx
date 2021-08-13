import classNames from "classnames";
import React, { FC, useEffect, useRef } from "react";

import { OtpInputProps } from "../../types";
import { getId } from "../../helpers";

import inputTextBaseStyles from "../input-text-base/input-text-base.module.css";
import styles from "./otp-input.module.css";

const OtpInput: FC<OtpInputProps> = ({ focus, disabled, dataTestId, id = "otp-input", value = "", ...props }) => {
  const inputClassName = classNames(styles["default"], { [inputTextBaseStyles["disabled"]]: disabled });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { current: inputEl } = inputRef;
    if (inputEl && focus) {
      inputEl.focus();
      inputEl.select();
    }
  }, [focus]);

  return (
    <input
      {...getId(id, dataTestId)}
      className={inputClassName}
      ref={inputRef}
      value={value}
      disabled={disabled}
      placeholder={"-"}
      maxLength={1}
      type="tel"
      autoComplete="off"
      {...props}
    />
  );
};

export default OtpInput;
