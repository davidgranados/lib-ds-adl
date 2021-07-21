import classNames from "classnames";
import React from "react";

import { IconProps } from "../../types";
import "../../icons/icomoon.css";

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const iconClassName = classNames(`icon icon-${name}`, className);
  return <span className={iconClassName} {...props} />;
};

export default Icon;
