import { createGlobalStyle, ThemeProvider } from "styled-components";
import GoogleFonts from "next-google-fonts";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 10px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  svg {
    display: block
  }
`;

const theme = {
  colors: {
    primary: "#0071f2",
    secondary: "#fd9900",
    text: {
      primary: "rgba(0, 24, 51)",
      secondary: "rgba(0, 24, 51, 0.60)",
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
