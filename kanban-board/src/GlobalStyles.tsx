import { createGlobalStyle } from 'styled-components';
import '@fontsource/plus-jakarta-sans/index.css';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: bold;
  }

  button, input, textarea {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`;
