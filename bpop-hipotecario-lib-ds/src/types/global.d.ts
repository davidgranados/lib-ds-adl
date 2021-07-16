import { ForwardedRef, MutableRefObject } from "react";

export type CombinedRef = Array<MutableRefObject<null> | ForwardedRef<HTMLInputElement>>;
