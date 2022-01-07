// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    brand: {
      green: "#3C8D50",
      900: "#1a202c",
    },
    darkBg: "#0E1011",
    // lightbg:
  },
  styles: {
    global: (props: any) => ({
      body: {
        // fontFamily: "Source Sans Pro",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("#FFFFFF", "#0E1011")(props),
        lineHeight: "base",
      },
    }),
  },
  components: {
    Button: {
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
      },
    },
  },
});

export default theme;
