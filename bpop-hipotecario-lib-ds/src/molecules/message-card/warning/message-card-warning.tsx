import React, { FC } from "react";

import { MessageCardWarningProps } from "../../../types";
import warningIcon from "../../../assets/images/80-warning.svg";

import { MessageCardBase } from "../base";

const MessageCardWarning: FC<MessageCardWarningProps> = (props) => {
  return <MessageCardBase id={"message-card-warning"} iconURL={warningIcon} {...props} />;
};

export default MessageCardWarning;
