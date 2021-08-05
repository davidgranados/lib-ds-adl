import { ReactNode } from "react";

import { Testable } from "./global";
import { Icon } from "../atoms/icon";

export declare interface TooltipProps extends Testable {
  children: ReactNode;
  textTitle?: string;
  textBody?: string;
  fullWidth?: boolean;
  marginLeft?: number;
  marginRight?: number;
}

export declare interface TooltipIconProps extends Omit<TooltipProps, "children"> {
  icon?: typeof Icon;
}

export declare interface WithTooltip {
  withTooltip?: boolean;
  tooltipTrigger?: ReactNode | string;
  tooltipTextTitle?: string;
  tooltipTextBody?: string;
  tooltipMarginLeft?: number;
  tooltipMarginRight?: number;
}

export declare interface WithTooltipIcon extends Omit<WithTooltip, "tooltipTrigger"> {
  tooltipIcon?: typeof Icon;
}
