import React, { useState, useContext, createContext } from "react";

const AppContext = createContext<{
  tagDisplay: boolean;
  setTagDisplay: (val: boolean) => void;
}>({
  tagDisplay: true,
  setTagDisplay: null,
});

export const AppProvider = ({ children }) => {
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

  const [tagDisplay, setTagDisplay] = useState(false);

  return (
    <>
      <AppContext.Provider
        value={{
          tagDisplay,
          setTagDisplay,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useAppContext = () => useContext(AppContext);
