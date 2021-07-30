import { MouseEventHandler } from "react";

export declare interface MessageCardBaseProps {
  iconURL: string;
  title: string;
  subtitle: string;
  textButton: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  iconAltAttribute?: string;
  iconTitleAttribute?: string;
}

export declare type MessageCardWarningProps = Omit<MessageCardBaseProps, "iconURL">;
