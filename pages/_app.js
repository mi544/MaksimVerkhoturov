import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  a {
    color: black;
    text-decoration: none
  }
`;

const theme = {
  primaryColor: "#00ffff",
  secondaryColor: "#ffffff",
  backgroundColor: "#000000",
  textColor: "#ffffff"
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
