import { ReactNode } from "react";

import { Testable } from "./global";

export declare interface TooltipProps extends Testable {
  children: ReactNode;
  textTitle: string;
  textBody: string;
}
