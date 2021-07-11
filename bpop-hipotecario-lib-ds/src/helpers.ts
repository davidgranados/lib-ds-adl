export const addClassToElement = (element: HTMLElement | null, className: string): void => {
  element && element.classList.add(className);
};
export const removeClassFromElement = (element: HTMLElement | null, className: string): void => {
  element && element.classList.remove(className);
};
