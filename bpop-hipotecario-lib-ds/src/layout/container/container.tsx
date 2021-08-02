import React, { FC } from "react";

import styles from "./container.module.css";

const Container: FC = ({ children }) => {
  return <div className={styles["default"]}>{children}</div>;
};

export default Container;
