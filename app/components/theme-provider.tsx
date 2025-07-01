"use client";
import { useState, createContext } from "react";

type ThemeContextType = {
  selected: number;
  setSelected: (selected: number) => void;
};
const noop: (selected: number) => void = () => {};
export const ThemeContext = createContext<ThemeContextType>({
  selected: 0,
  setSelected: noop,
});
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState(0);
  return (
    <ThemeContext.Provider value={{ selected, setSelected }}>
      {children}
    </ThemeContext.Provider>
  );
}
