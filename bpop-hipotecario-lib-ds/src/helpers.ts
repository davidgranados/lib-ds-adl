export const addClassToElement = (element: HTMLElement | null, className: string, verification = true): void => {
  verification && element && element.classList.add(className);
};
export const removeClassFromElement = (element: HTMLElement | null, className: string, verification = true): void => {
  verification && element && element.classList.remove(className);
};
export const toggleClassFromElement = (element: HTMLElement | null, className: string, verification = true): void => {
  verification && element && element.classList.toggle(className);
};
