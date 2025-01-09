import React from "react";

export default function useEscapeKey(handleKey) {
  React.useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape" || event.key === "Esc") {
        handleKey();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleKey]);
}
