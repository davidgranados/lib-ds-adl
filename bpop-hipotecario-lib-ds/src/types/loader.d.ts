import { Testable } from "./global";

export interface LoaderProps extends Testable {
  id: string;
  show: boolean;
  showOverlay: boolean;
}
