import { MouseEventHandler } from "react";

import { Testable } from "./global";

export declare interface MessageCardBaseProps extends Testable {
  iconURL: string;
  title: string;
  subtitle: string;
  textButton: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  iconAltAttribute?: string;
  iconTitleAttribute?: string;
}

export declare type MessageCardWarningProps = Omit<MessageCardBaseProps, "iconURL">;
