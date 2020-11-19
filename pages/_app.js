import { createGlobalStyle, ThemeProvider } from "styled-components";
import MediaQueriesContext from "utils/MediaQueriesContext";
import useWindowDimensions from "utils/hooks/useWindowDimensions";

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
  accentColor: "#00ffff",
  secondaryAccentColor: "#ffffff",
  backgroundColor: "#000000",
  textColor: "#ffffff",
  secondaryTextColor: "#e8e8e8"
};

export default function App({ Component, pageProps }) {
  const dimensions = useWindowDimensions();
  return (
    <>
      <GlobalStyle />
      <MediaQueriesContext.Provider value={dimensions}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MediaQueriesContext.Provider>
    </>
  );
}
