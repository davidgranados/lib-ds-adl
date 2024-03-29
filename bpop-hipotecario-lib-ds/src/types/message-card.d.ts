import { MouseEventHandler } from "react";

import { Testable } from "./global";

export declare type MessageCardIcon = "warning" | "password" | "authorized" | "target" | "default";

export declare interface MessageCardBaseProps extends Testable {
  icon?: MessageCardIcon;
  iconURL?: string;
  title: string;
  subtitle: string;
  textButton: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  iconAltAttribute?: string;
  iconTitleAttribute?: string;
  secondSubtitle?: string;
  secondaryButtonText?: string;
  onSecondaryClick?: () => void;
  backgroundImageUrl?: string;
}

export declare type MessageCardWarningProps = Omit<MessageCardBaseProps, "iconURL">;
