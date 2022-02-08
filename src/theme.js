import { extendTheme } from "@chakra-ui/react";
import "./global.css";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#302B63",
      secondary: "#7A6EFC",
      darker: "#0F0C29",
      dark: "#24243E",
    },
  },
  fonts: {
    heading: `Inter, sans-serif`,
    body: `Inter, sans-serif`,
  },
});

export default theme;
