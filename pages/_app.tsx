import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import TopNavBar from "../components/TopNavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@mantine/hooks";
import { ParallaxProvider } from "react-scroll-parallax";

import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const isPhone = useMediaQuery("(max-width: 800px)");

  useEffect(() => {
    AOS.init();
  });
  return (
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        <TopNavBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
