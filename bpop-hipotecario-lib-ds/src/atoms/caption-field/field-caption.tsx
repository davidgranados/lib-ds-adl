import React, { FC } from "react";

import { Typography } from "../typography";

import { FieldCaptionProps } from "./field-caption.d";

const FieldCaption: FC<FieldCaptionProps> = ({ status, children }) => {
  return (
    <Typography variant={"body-sm"} component={"span"} lineHeight={"body-sm"} status={status}>
      {children}
    </Typography>
  );
};

export default FieldCaption;
