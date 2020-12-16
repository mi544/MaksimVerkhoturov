import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  &::selection{
    color: ${p => p.theme.textColor};
    background:${p => p.theme.accentColor}
  }

  a {
    color: ${p => p.theme.textColor};
    text-decoration: none;
    cursor: pointer;
  }
`;

const theme = {
  primaryColor: "#00ffff",
  secondaryColor: "#ffffff",
  accentColor: "#00ffff",
  secondaryAccentColor: "#ffffff",
  backgroundColor: "#000000",
  textColor: "#ffffff",
  secondaryTextColor: "#e8e8e8"
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
