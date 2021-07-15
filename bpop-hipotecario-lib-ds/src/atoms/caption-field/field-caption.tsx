import React, { FC } from "react";

import { FieldCaptionProps } from "../../types";

import { Typography } from "../typography";

const FieldCaption: FC<FieldCaptionProps> = ({ status, children }) => {
  return (
    <Typography
      data-testid={"field-caption"}
      variant={"body-sm"}
      component={"span"}
      lineHeight={"body-sm"}
      status={status}
    >
      {children}
    </Typography>
  );
};

export default FieldCaption;
