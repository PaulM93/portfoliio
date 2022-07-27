import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const primary = "#5686F5";
  const themes = {
    //Dark
    dark: {
      background: "black",
      colors: {
        primary: primary,
      },
    },
    //Light
    light: {
      background: "white",
      colors: {
        primary: primary,
      },
    },
  };
  const [theme, setTheme] = useState(themes.dark);

  return (
    <>
      <ThemeContext.Provider
        value={{
          theme,
          themes,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => useContext(ThemeContext);
