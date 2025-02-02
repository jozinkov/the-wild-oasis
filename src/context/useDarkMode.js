import { useContext } from "react";
import { DarkModeContext } from "./contexts";

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error("Outside of context area.");
  return context;
}
