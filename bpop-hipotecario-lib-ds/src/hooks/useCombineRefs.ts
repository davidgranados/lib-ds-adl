import { CombinedRef } from "../types";
import React from "react";

function useCombinedRefs<T>(refs: CombinedRef): React.MutableRefObject<T | null> {
  const targetRef = React.useRef(null);

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}

export default useCombinedRefs;
