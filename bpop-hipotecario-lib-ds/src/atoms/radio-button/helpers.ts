import styles from "./radio-button.module.css";

import { addClassToElement, removeClassFromElement } from "../../helpers";

export const checkThisRadio = (radioWrapper: HTMLLabelElement, name: string): void => {
  const allRadioButtonsInDOM = Array.from(document.querySelectorAll(`input[type="radio"][name="${name}"]`));
  const allWrappersInDOM = allRadioButtonsInDOM.map((input) => {
    return input.closest(`.${styles["wrapper"]}`);
  });
  allWrappersInDOM.forEach((wrapperElement) => {
    removeClassFromElement(wrapperElement, styles["wrapper--checked"]);
  });
  addClassToElement(radioWrapper, styles["wrapper--checked"]);
};
