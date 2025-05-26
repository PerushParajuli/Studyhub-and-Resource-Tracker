import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkModeQuery.matches ? "dark" : "light");

    const handleThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };
    darkModeQuery.addEventListener("change", handleThemeChange);

    return () => darkModeQuery.removeEventListener("change", handleThemeChange);
  });

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const BrowserTheme = () => {
  return useContext(ThemeContext);
};
