import { ThemeProvider } from "styled-components";
import Header from "../src/Header";
import { GlobalProvider } from "../src/hooks/globalContext";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useGlobalStateContext } from "../src/hooks/globalContext";
import CustomCurson from "../src/CustomCurson";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
