import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { DarkModeContext } from "./contexts";

DarkModeProvider.propTypes = {
  children: PropTypes.any,
};

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
