import { MouseEventHandler } from "react";

import { Testable } from "./global";

export declare interface IconProps extends Testable {
  name: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}
