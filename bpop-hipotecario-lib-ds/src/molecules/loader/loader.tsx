import React, { useCallback, useEffect, useState } from "react";
import { getGlobalImageUrl, getSuffixedId } from "../../helpers";
import { Testable } from "../../types";

import styles from "./loader.module.css";

export interface LoaderProps extends Testable {
  id: string;
  show: boolean;
  showOverlay: boolean;
}

const BP_SMALL_LOGO = getGlobalImageUrl("bp-small-logo.svg");

const Loader: React.FC<LoaderProps> = ({ id, dataTestId, show, showOverlay }) => {
  const [wasClosed, setWasClosed] = useState(false);

  const handleToggle = useCallback(() => {
    !wasClosed && setWasClosed(true);
  }, [wasClosed]);

  useEffect(() => {
    if (!show) handleToggle();
  }, [show, handleToggle]);

  return (
    <div
      {...getSuffixedId(id, "wrapper", dataTestId)}
      className={`${styles["wrapper"]} ${show && styles["show"]} ${wasClosed && styles["close"]}`}
    >
      {showOverlay && <div {...getSuffixedId(id, "wrapper-overlay", dataTestId)} className={styles["overlay"]} />}
      <div className={styles["content"]}>
        <figure className={styles["figure"]}>
          <img src={BP_SMALL_LOGO} alt="Popular bank small logo" className={styles["img"]} />
        </figure>
        <p className={`${styles["text"]} ${showOverlay && styles["white"]}`}>
          Espera unos segundos, estamos validando la información
        </p>
        <div className={styles["load-bar"]}>
          <div className={styles["fill"]}></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Loader);
