import React from "react";

import { HTMLPropsFor } from "../../types";

export const Label: React.FC<HTMLPropsFor<"label">> = ({ children, ...props }) => {
  return <label {...props}>{children}</label>;
};
