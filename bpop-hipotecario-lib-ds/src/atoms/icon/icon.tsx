import classNames from "classnames";
import React from "react";

import { IconProps } from "../../types";

import "../../icons/icomoon.css";

const Icon: React.FC<IconProps> = ({ name, className, dataTestId, id, ...props }) => {
  const iconClassName = classNames(`icon icon-${name}`, className);
  return (
    <span
      id={id || `icon-${name}`}
      data-testid={dataTestId || id || `icon-${name}`}
      className={iconClassName}
      {...props}
    />
  );
};

export default Icon;
