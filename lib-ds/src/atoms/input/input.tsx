import React from "react";
import classNames from "classnames";

import { HTMLPropsFor } from "../../types";

import inputStyles from "./input.module.css";

export const Input: React.FC<HTMLPropsFor<"input">> = (props) => {
  const inputClassName = classNames(inputStyles["default"]);
  return <input className={inputClassName} {...props} />;
};
