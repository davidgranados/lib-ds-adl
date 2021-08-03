import classNames from "classnames";
import React, { FC } from "react";

import { ContainerProps } from "../../types";

import styles from "./container.module.css";

const Container: FC<ContainerProps> = ({ children, className, title, titleClassName, titleHTMLTag = "h1" }) => {
  const containerClassName = classNames(styles["default"], className);
  const _titleClassName = classNames(styles["title"], titleClassName);
  const Title = `${titleHTMLTag}` as keyof JSX.IntrinsicElements;
  return (
    <div className={containerClassName}>
      {title && <Title className={_titleClassName}>{title}</Title>}
      {children}
    </div>
  );
};

export default Container;
