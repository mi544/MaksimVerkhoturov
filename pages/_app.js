import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  &::selection{
    color: ${p => p.theme.textColor};
    background:${p => p.theme.accentColor}
  }

  a {
    color: black;
    text-decoration: none
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
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
