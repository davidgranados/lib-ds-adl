import React from "react";

export type HTMLPropsFor<Tag extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[Tag];
export type CombinedRef = Array<React.MutableRefObject<null> | React.ForwardedRef<HTMLInputElement>>;
