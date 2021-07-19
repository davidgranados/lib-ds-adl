import classNames from "classnames";
import React, { useRef } from "react";

import { RadioFieldProps } from "../../types/input-field";
import { Typography } from "../../atoms/typography";
import { addClassToElement } from "../../helpers";

import radioFieldStyles from "./radio-field.module.css";

const RadioField: React.FC<RadioFieldProps> = ({ disabled, label, onChange, ...props }) => {
  const wrapperClassName = classNames(radioFieldStyles["wrapper"], {
    [radioFieldStyles["wrapper--enabled"]]: !disabled,
    [radioFieldStyles["wrapper--disabled"]]: disabled,
  });
  const labelFontColor = !disabled ? "carbon-900" : "carbon-mid-400";

  const wrapperRef = useRef(null);
  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      addClassToElement(wrapperRef.current, radioFieldStyles["wrapper--checked"]);
    }
    onChange && onChange(event);
  };
  return (
    <label ref={wrapperRef} className={wrapperClassName}>
      <span className={radioFieldStyles["control-wrapper"]}>
        <input
          className={radioFieldStyles["input"]}
          type="radio"
          disabled={disabled}
          onChange={handleInputOnChange}
          {...props}
        />
        <span className={radioFieldStyles["control"]}>
          <span className={radioFieldStyles["control__circle"]} />
        </span>
      </span>
      <Typography
        data-testid={"radio-label"}
        variant={"body-md"}
        component={"span"}
        color={labelFontColor}
        weight={"medium"}
        lineHeight={"body-sm"}
      >
        {label}
      </Typography>
    </label>
  );
};

export default RadioField;
