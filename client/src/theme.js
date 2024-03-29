import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway";
import "@fontsource/open-sans";

export const myNewTheme = extendTheme({
  // initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    dark: {
      background: "#16181D",
    },
    light: {
      background: "#F7FAFC",
    },
    primary: "#5686F5",
    secondary: "#EDE8FD",
    primaryMute: "#98a0b3",
    cardBackground: "#1A1D23",
    border: "#23272F",
  },
  fonts: {
    heading: "Raleway",
    body: "Open Sans",
  },
});
