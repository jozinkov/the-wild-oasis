import { useEffect, useRef } from "react";

export function useOutsideClick(handler, capturing = true) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, capturing);
      return () =>
        document.removeEventListener("click", handleClick, capturing);
    },
    [handler, capturing]
  );

  return ref;
}
