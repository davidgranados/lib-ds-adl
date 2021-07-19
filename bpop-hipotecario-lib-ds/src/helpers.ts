export const addClassToElement = (
  element: HTMLElement | Element | null,
  className: string,
  verification = true
): void => {
  verification && element && element.classList.add(className);
};
export const removeClassFromElement = (
  element: HTMLElement | Element | null,
  className: string,
  verification = true
): void => {
  verification && element && element.classList.remove(className);
};
export const toggleClassFromElement = (
  element: HTMLElement | Element | null,
  className: string,
  verification = true
): void => {
  verification && element && element.classList.toggle(className);
};
