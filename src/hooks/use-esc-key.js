import React from "react";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape" || event.key === "Esc") {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [callback]);
}
