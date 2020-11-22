import { createGlobalStyle, ThemeProvider } from "styled-components";
import MediaQueriesContext from "utils/MediaQueriesContext";
import useWindowDimensions from "utils/hooks/useWindowDimensions";

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
  const dimensions = useWindowDimensions();
  return (
    <>
      <MediaQueriesContext.Provider value={dimensions}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </MediaQueriesContext.Provider>
    </>
  );
}
