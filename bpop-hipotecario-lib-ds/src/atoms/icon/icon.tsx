import React from "react";
import "../../icons/icomoon.css";

export interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <span className={`icon icon-${name}`}></span>;
};

export default Icon;
