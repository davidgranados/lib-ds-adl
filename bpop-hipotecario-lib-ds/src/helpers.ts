import React from "react";

export const addClassToElement = (ref: React.RefObject<HTMLElement>, className: string): void => {
  ref.current && ref.current.classList.add(className);
};
export const removeClassFromElement = (ref: React.RefObject<HTMLElement>, className: string): void => {
  ref.current && ref.current.classList.remove(className);
};
